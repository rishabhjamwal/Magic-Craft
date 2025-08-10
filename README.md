# Magic Craft - Web3 Wallet

### A mystical Web3 wallet extension for Ethereum, Polygon, BNB Smart Chain, Arbitrum, and all EVM networks.

**Magic Craft** is a browser extension Web3 wallet designed for secure cryptocurrency management, DeFi exploration, and NFT trading. Built with ancient magical themes and modern security practices.


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

**Magic Craft** - Where ancient magic meets modern Web3 technology ✨

_Built with ❤️ and 🪄 for the decentralized future_
