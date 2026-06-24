<h1 align="center">
  <img src="https://drive.google.com/uc?export=view&id=1PvinjI5QFG3Rixo0WV16JCJGQNvfVjYk" alt="" width="100%" border="0" />
<br>

# ERC 20

</h1>

> Status from Project: <img src="https://drive.google.com/uc?export=view&id=1Tak2fjuusuwdzNI_rwhPqLHGVLVKNTm1" alt="" width="32" border="0" /> F I N I S H E D <img src="https://drive.google.com/uc?export=view&id=1Tak2fjuusuwdzNI_rwhPqLHGVLVKNTm1" alt="" width="32" border="0" />

## Shields

![Badge](https://img.shields.io/static/v1?label=react&message=FrameWork&color=blue&style=for-the-badge&logo=REACT)

![Badge](https://img.shields.io/github/issues/humbertoromanojr/protocoin-erc20-hardhat?logo=visual-studio-code&style=plastic&logo=appveyor)
![Badge](https://img.shields.io/github/forks/humbertoromanojr/protocoin-erc20-hardhat)
![Badge](https://img.shields.io/github/stars/humbertoromanojr/protocoin-erc20-hardhat)
![Badge](https://img.shields.io/github/license/humbertoromanojr/protocoin-erc20-hardhat)
![Badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fhumbertoromanojr%2Fprotocoin-erc20-hardhat)

## Libraries

- [NODE JS](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Dontenv](https://github.com/motdotla/dotenv)

<div align="center">
  <img src="https://drive.google.com/uc?export=view&id=" alt="" width="100%" border="0" />
</div>
<br />

### Install

Install Node JS <br />
`npm init -y` <br /><br />

Install Hardhat<br />
`npm i -D hardhat`<br /><br />

Initializing Hardhat<br />
`npx hardhat --init`<br /><br />

Compile<br />
`npm run compile`<br /><br />

Tests<br />
`npm test`<br />
`npx hardhat test mocha`<br />
`npx hardhat test solidity`<br /><br />

Local Test Deployment<br />
Terminal 01 `npx hardhat node`<br />
Terminal 02 `npm run deploy:dev`<br />

Clone project to repository:<br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" />
git clone `https://humbertoromanojr@bitbucket.org/humbertoromanojr/protocoin-erc20-hardhat.git`

<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> Go to `protocoin-erc20-hardhat` folder <br />

Install node_modules <br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> `npm i`

Run application <br />
<img src="https://drive.google.com/uc?export=view&id=16QqYlur8qtl5ao_XyEb4IthGyveQmELo" alt="" width="22" border="0" /> `npx start`

##

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

## Author

<img src="https://avatars1.githubusercontent.com/u/6500430?s=460&u=42d7e22fa1c77b061505fe1cfc3fcaa3e2a4d1e5&v=4" width="80" alt="linkedin.com/in/junior-dev" />
<img src="https://drive.google.com/uc?export=view&id=1-y6rFrn4uqPfLx3nuUTXh14OeRGSZzHu" alt="" width="42" border="0" />
:guitar: Humberto Jr :guitar:
<br />

LinkedIn: linkedin.com/in/humbertoromanojr <br />
GitLab: gitlab.com/humbertoromanojr <br />
<img src="https://drive.google.com/uc?export=view&id=160InxEPlK0IynTEGEmQJDETo_8grncjI" alt="" width="22" border="0" />: astronomi@gmail.com <br />
<br />

Made with <img src="https://drive.google.com/uc?export=view&id=1bb7UVQdQc1QpCIGqaI2bh4YdAn6Ihah-" alt="" width="22" border="0" /> and lots of animation by :guitar: Humberto Jr :guitar:

##

## Sources

- https://ethereum.org/developers/docs/standards/tokens/erc-20/

<br /><br />

##

<h2 align="center">

<img src="https://drive.google.com/uc?export=view&id=1lAPQY5CLSU4ofNI7-kTS8SMtKo6NZt-B" alt="" width="22" border="0" /> Read more below <img src="https://drive.google.com/uc?export=view&id=1lAPQY5CLSU4ofNI7-kTS8SMtKo6NZt-B" alt="" width="22" border="0" />

</h2>

##

# Sample Hardhat 3 Project (`mocha` and `ethers`)

This project showcases a Hardhat 3 project using `mocha` for tests and the `ethers` library for Ethereum interactions.

To learn more about Hardhat 3, please visit the [Getting Started guide](https://hardhat.org/docs/getting-started#getting-started-with-hardhat-3). To share your feedback, join our [Hardhat 3](https://hardhat.org/hardhat3-telegram-group) Telegram group or [open an issue](https://github.com/NomicFoundation/hardhat/issues/new) in our GitHub issue tracker.

## Project Overview

This example project includes:

- A simple Hardhat configuration file.
- Foundry-compatible Solidity unit tests.
- TypeScript integration tests using `mocha` and ethers.js
- Examples demonstrating how to connect to different types of networks, including locally simulating OP mainnet.

## Usage

### Running Tests

To run all the tests in the project, execute the following command:

```shell
npx hardhat test
```

You can also selectively run the Solidity or `mocha` tests:

```shell
npx hardhat test solidity
npx hardhat test mocha
```

### Make a deployment to Sepolia

This project includes an example Ignition module to deploy the contract. You can deploy this module to a locally simulated chain or to Sepolia.

To run the deployment to a local chain:

```shell
npx hardhat ignition deploy ignition/modules/Counter.ts
```

To run the deployment to Sepolia, you need an account with funds to send the transaction. The provided Hardhat configuration includes a Configuration Variable called `SEPOLIA_PRIVATE_KEY`, which you can use to set the private key of the account you want to use.

You can set the `SEPOLIA_PRIVATE_KEY` variable using the `hardhat-keystore` plugin or by setting it as an environment variable.

To set the `SEPOLIA_PRIVATE_KEY` config variable using `hardhat-keystore`:

```shell
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
```

After setting the variable, you can run the deployment with the Sepolia network:

```shell
npx hardhat ignition deploy --network sepolia ignition/modules/Counter.ts
```
