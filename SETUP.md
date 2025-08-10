# Magic Craft Wallet - Setup Guide

This guide will help you set up and test the Magic Craft wallet extension on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Yarn** package manager - [Install here](https://yarnpkg.com/getting-started/install)
- **Git** - [Download here](https://git-scm.com/)

## Step 1: Clone and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/rishabhjamwal/Magic-Craft.git
   cd Magic-Craft
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

## Step 2: Build the Extension

1. **Build for Chrome/Edge**

   ```bash
   yarn build
   ```

2. **Build for Firefox** (if needed)
   ```bash
   yarn build:firefox
   ```

The build output will be in the `dist/` folder.

## Step 3: Load Extension in Browser

### Chrome/Edge Setup

1. Open Chrome or Edge browser
2. Navigate to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in top right)
4. Click **"Load unpacked"**
5. Select the `dist/prod/chrome_unpacked` folder from your project
6. The Magic Craft extension should now appear in your extensions list

### Firefox Setup

1. Open Firefox browser
2. Navigate to `about:debugging`
3. Click **"This Firefox"** tab
4. Click **"Load Temporary Add-on"**
5. Select the `manifest.json` file from `dist/prod/firefox_unpacked`
6. The extension will be loaded temporarily (until browser restart)

## Step 4: Test the Extension

### Initial Setup

1. **Open the extension** by clicking the Magic Craft icon in your browser toolbar
2. **Create a new wallet**:
   - Click "Create a new wallet"
   - Follow the setup wizard
   - **IMPORTANT**: Save your seed phrase securely
   - Set a strong password

### Key Features to Test

#### 🔐 **Wallet Creation & Security**

- [ ] Create a new wallet with seed phrase
- [ ] Verify seed phrase backup
- [ ] Set and test password protection
- [ ] Test wallet unlock functionality

#### 💰 **Account Management**

- [ ] View wallet address
- [ ] Check account balance (if you have test tokens)
- [ ] Add multiple accounts from same seed phrase
- [ ] Import existing wallet with seed phrase

#### 🌐 **Network Support**

- [ ] Switch between networks (Ethereum, Polygon, BSC, etc.)
- [ ] Add custom networks
- [ ] Test network connectivity

#### 📱 **QR Code Scanner**

- [ ] Test QR code scanning functionality
- [ ] Try scanning wallet addresses
- [ ] Test with different QR code formats

#### 🔗 **DApp Connection**

- [ ] Connect to test DApps (like Uniswap testnet)
- [ ] Test transaction signing
- [ ] Verify connection permissions

### Test Networks

For testing, use these test networks:

- **Ethereum Goerli**: Get test ETH from [Goerli Faucet](https://goerlifaucet.com/)
- **Polygon Mumbai**: Get test MATIC from [Mumbai Faucet](https://faucet.polygon.technology/)
- **BSC Testnet**: Get test BNB from [BSC Faucet](https://testnet.binance.org/faucet-smart)

## Step 5: Development Mode

For development and testing changes:

1. **Start development server**

   ```bash
   yarn start
   ```

2. **Make changes** to the code
3. **Reload the extension** in browser
4. **Test your changes**

## Troubleshooting

### Common Issues

#### Extension Not Loading

- Ensure you're in Developer mode
- Check that you selected the correct folder (`dist/prod/chrome_unpacked`)
- Try refreshing the extensions page

#### Build Errors

- Check Node.js version: `node --version` (should be 16+)
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Check for TypeScript errors: `yarn ts`

#### Extension Crashes

- Check browser console for errors
- Try reloading the extension
- Clear browser cache and cookies

#### Network Connection Issues

- Verify RPC endpoints are accessible
- Check your internet connection
- Try switching networks

### Debug Mode

Enable debug logging:

1. Open browser DevTools
2. Go to Console tab
3. Look for Magic Craft related logs
4. Report any errors with screenshots

## Security Notes

⚠️ **Important Security Reminders**:

- This is a **development/test** version - don't store real funds
- Use **test networks only** for testing
- Never share your seed phrase
- Use strong, unique passwords
- Keep your system and browser updated

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Look for similar issues in GitHub Issues
3. Create a new issue with:
   - Browser and version
   - Operating system
   - Steps to reproduce
   - Error messages/screenshots

## Next Steps

Once you've tested the basic functionality:

1. **Explore the codebase** - Check out the project structure
2. **Try different features** - Test all wallet capabilities
3. **Contribute** - Report bugs or suggest improvements
4. **Customize** - Modify the theme or add new features

---

**Happy testing! 🎭✨**

_Magic Craft - Where ancient magic meets modern Web3 technology_
