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

//Storage
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
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

// image/icon for default metadata
const TEST_IMAGE: &str = "https://bafkreic5tytkkxr4zojgakkafn7mdtoptct7yzrkrocnrbgvgmi3z4gdu4.ipfs.dweb.link/";





#[near_bindgen]
impl Contract {
    /// Initializes the contract owned by `owner_id` with
    /// default metadata
    #[init]
    pub fn new_default_meta(owner_id: ValidAccountId) -> Self {  //declaring new function which intakes an owner id and creates default metadata for the account within the pub struct 'Contract'
        Self::new(
            owner_id,
            NFTContractMetadata {  //specifies what the default metadata is set to.
                spec: NFT_METADATA_SPEC.to_string(),
                name: "New NEAR non-fungible token test".to_string(),
                symbol: "EXAMPLE".to_string(),
                icon: Some(TEST_IMAGE.to_string()),
                base_uri: None,
                reference: None,
                reference_hash: None,
            },
        )
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
            metadata: LazyOption::new(StorageKey::Metadata, Some(&metadata)), //LazyOption is a struct from the nearsdk collection, this struct function is to store the value for a given key. In this case it is the NFTs metadata.
        }
    }
}

near_contract_standards::impl_non_fungible_token_core!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_approval!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_enumeration!(Contract, tokens);
#[near_bindgen]  //NFT Metadata provider/reader
impl NonFungibleTokenMetadataProvider for Contract {
    fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()  //Calls for the metadata of the contract and returns their values, will panic if there is not one.
    }
}