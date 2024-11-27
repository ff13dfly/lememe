# ChatGTP Question of Smart Contract

## Detail of contract

* There are 3 parts of Lememe smart contract, Lottery, Minting and Token.

### Lottery

* Exposed method: create

* Data structure:

    ```Javascript
        {
            "basic":{
                "size":[720,720],               //for devicePixel 
                "cell":[240,240],
            },
            "image":{
                "provider":"web3.storage",
                "cid":"",
            },
            "parts":[
                {
                    "value":[
                        "START_OF_HASH",        //integer
                        "STEP_TO_SLICE",        //integer
                        "TOTAL_OPTIONS",        //integer
                        "DEFAULT_OFFSET"        //integer
                    ],
                    "image":[
                        "SELECT_LINE",          //integer
                        "SELECT_ROW",           //integer
                        "CELL_X_EXTEND",        //integer
                        "CELL_Y_EXTEND"         //integer
                    ],
                    "position":[
                        "POSITION_X_ON_NFT",    //integer
                        "POSITION_Y_ON_NFT"     //integer
                    ],
                }
                ...
            ],
            "rarity":[
                [
                    "INDEX_OF_SELECTED_PART",   //integer
                    "INDEX_OF_SELECTED_PART",   //integer
                    ... 
                ], 
            ]
            "name":"NAME_OF_NEW_MEME",
            "total":1000000000,                 // 1 Billion
            "deme":,
        }
    ```

* Lottery parts. Total 9 pieces to combine the raw image for lottery. [4,8,5,5,5,5,5] can be used to create 1/100,000 lottery. The image grid size should be [5,7], it is a [ 1200px, 1680px ] image.

### Mint

* Check ticket when minting.

### Token

* Token can be swap by uniswap.


## Resource

* [https://github.com/AmazingAng/WTF-Solidity?tab=readme-ov-file](https://github.com/AmazingAng/WTF-Solidity?tab=readme-ov-file)