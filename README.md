# Magic Craft - Web3 Wallet

### A mystical Web3 wallet extension for Ethereum, Polygon, BNB Smart Chain, Arbitrum, and all EVM networks.

**Magic Craft** is a browser extension Web3 wallet designed for secure cryptocurrency management, DeFi exploration, and NFT trading. Built with ancient magical themes and modern security practices.

![Magic Craft](./docs/banner.png)

**Table of Contents**

- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Security](#security)
- [Contributing](#contributing)
- [Support](#support)

## Features

### 🎭 Mystical Design

- **Magical UI Theme**: Dark mystical interface with golden accents and arcane purple highlights
- **Animated Elements**: Sparkling effects and magical glow animations
- **Responsive Design**: Beautiful interface that adapts to different screen sizes

### 🔐 Self-Custodial Security

- **User-centric approach**: Your keys belong to you and are securely stored on your device
- **Hardware wallet support**: Compatible with [Ledger](https://www.ledger.com/) for enhanced security
- **Battle-tested encryption**: Uses KDBX (KeePass v2) database encryption, the same standard used by password managers

### 🌐 Dapp Integration

- **Seamless connectivity**: Connect with decentralized applications across various EVM networks
- **Web3 standards**: Supports all the latest Web3 standards and protocols
- **QR Code scanning**: Built-in QR code scanner for easy wallet connections

### 📊 Full-Page Dashboard

- **Comprehensive portfolio**: Detailed information about accounts, transactions, and assets
- **Real-time updates**: Stay updated on your portfolio and activities within the Web3 ecosystem
- **Multi-network support**: Switch between networks effortlessly

### 🔗 Multi-Network Support

- **Ethereum**: Full support for Ethereum mainnet and testnets
- **Polygon**: Optimized for Polygon network
- **BNB Smart Chain**: Native support for BSC
- **Arbitrum**: Layer 2 scaling solutions
- **All EVM networks**: Compatible with any EVM-compatible blockchain

### 🛡️ Security First

- **Encrypted storage**: All sensitive data is encrypted using AES-256
- **Password protection**: User-defined passphrase encryption
- **Brute force protection**: Automatic lockout after failed attempts
- **Secure key generation**: Cryptographic random number generation

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Git

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/rishabhjamwal/Magic-Craft.git
   cd Magic-Craft
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Build the extension**

   ```bash
   yarn build
   ```

4. **Load in browser**
   - Open Chrome/Edge and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder from the build output

### Development Mode

1. **Start development server**

   ```bash
   yarn start
   ```

2. **Watch for changes**

   ```bash
   yarn dev
   ```

3. **Run tests**
   ```bash
   yarn test
   ```

## Development

### Project Structure

```
src/
├── app/                    # Main application code
│   ├── components/         # React components
│   ├── screens/           # Page components
│   ├── hooks/             # Custom React hooks
│   └── atoms/             # State management
├── core/                  # Core wallet functionality
│   ├── back/              # Background services
│   ├── client/            # Client-side logic
│   └── types/             # TypeScript definitions
├── lib/                   # Utility libraries
└── fixtures/              # Static data and configurations
```

### Key Technologies

- **React**: Frontend framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Styling framework
- **Jotai**: State management
- **Ethers.js**: Ethereum interaction
- **KDBX**: Secure data storage

### Building for Production

```bash
# Build for Chrome/Edge
yarn build

# Build for Firefox
yarn build:firefox

# Build for development
yarn build:dev
```

## Security

### Encryption Standards

- **AES-256**: Advanced Encryption Standard for data protection
- **Argon2**: Memory-hard key derivation function
- **PBKDF2**: Password-based key derivation
- **Unique salts**: Prevents rainbow table attacks

### Security Features

- **Encrypted vault**: All sensitive data stored in encrypted KDBX database
- **Session management**: Secure password session handling
- **Memory protection**: Sensitive data cleared from memory
- **Hardware wallet integration**: Support for Ledger and Trezor

### Best Practices

- Never share your seed phrase
- Use strong, unique passwords
- Enable hardware wallet for large holdings
- Regularly backup your wallet
- Keep the extension updated

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## Support

### Getting Help

- **Documentation**: Check the `/docs` folder for detailed guides
- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Join community discussions on GitHub

### Common Issues

- **Extension not loading**: Ensure you're in developer mode
- **Build errors**: Check Node.js version and dependencies
- **Connection issues**: Verify network settings and RPC endpoints

### Security Reporting

If you discover a security vulnerability, please report it privately to maintainers.

---

**Magic Craft** - Where ancient magic meets modern Web3 technology ✨

_Built with ❤️ and 🪄 for the decentralized future_
