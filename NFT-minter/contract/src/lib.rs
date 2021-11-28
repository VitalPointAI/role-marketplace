use near_contract_standards::non_fungible_token::metadata::{
    NFTContractMetadata, NonFungibleTokenMetadataProvider, TokenMetadata, NFT_METADATA_SPEC,
};
use near_sdk::{ env, near_bindgen, setup_alloc};
use near_contract_standards::non_fungible_token::{Token, TokenId};
use near_contract_standards::non_fungible_token::NonFungibleToken;
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LazyOption;
use near_sdk::json_types::ValidAccountId;
use near_sdk::{ AccountId, BorshStorageKey, PanicOnDefault, Promise, PromiseOrValue,
};

near_sdk::setup_alloc!();
near_contract_standards::impl_non_fungible_token_core!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_approval!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_enumeration!(Contract, tokens); 

//Storage
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)] // Functions to pack, store, unpack data and a panic on default funtion as a saftey net in the event of no data.
pub struct Contract {
    tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
}

// Minting funtion 
#[near_bindgen]
impl Contract{

    
    #[payable]
     pub fn nft_mint(
     &mut self,
     token_id: TokenId,
     receiver_id: ValidAccountId,
     token_metadata: TokenMetadata,
) -> Token {
    self.tokens.mint(token_id, receiver_id, Some(token_metadata))
    }

    #[init]
    pub fn new(owner_id: ValidAccountId, metadata: NFTContractMetadata) -> Self {
        assert!(!env::state_exists(), "Already initialized"); //checks to see if default metadata has already been created. ie the contract has been initialized already.
        metadata.assert_valid();
        Self {  //self refers to Contract struct
            tokens: NonFungibleToken::new(  //calling the 'new' method to be defined by the NonFungibleToken type to log and save the new tokens data.
                StorageKey::NonFungibleToken,
                owner_id,
                Some(StorageKey::TokenMetadata),
                Some(StorageKey::Enumeration),
                Some(StorageKey::Approval),
            ),
            metadata: LazyOption::new(StorageKey::Metadata, Some(&metadata)), 
        } //LazyOption is a struct from the nearsdk collection, this struct function is to store the value for a given key. In this case it is the NFTs metadata.
    }
}

//Declaring the different subtypes within the StorageKey type.
#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    Metadata,
    NonFungibleToken,
    Enumeration,
    TokenMetadata,
    Approval,
}

#[near_bindgen]  
impl NonFungibleTokenMetadataProvider for Contract {
    fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()  
    }  
}

//near call $ID nft_mint '{"token_id": "0", "receiver_id": "'$ID'", "token_metadata": { "title": "Some Art", "description": "My NFT media", "media": "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/", "copies": 1}}' --accountId $ID --deposit 0.1