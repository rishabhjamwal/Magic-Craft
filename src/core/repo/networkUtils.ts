import { DEFAULT_NETWORKS } from "fixtures/networks";
import { networks } from "./helpers";

/**
 * Utility function to manually reset and reload default networks
 * This can be called from the console if networks are not loading properly
 */
export async function resetDefaultNetworks() {
  console.log("🔄 Resetting default networks...");

  try {
    // Clear existing networks
    await networks.clear();
    console.log("🗑️ Cleared existing networks");

    // Add all default networks
    await networks.bulkPut(DEFAULT_NETWORKS);
    console.log("✅ Added default networks:", DEFAULT_NETWORKS.length);

    // Verify
    const count = await networks.count();
    console.log("📊 Total networks in DB:", count);

    return { success: true, count };
  } catch (error) {
    console.error("❌ Failed to reset networks:", error);
    return { success: false, error };
  }
}

/**
 * Utility function to check network database status
 */
export async function checkNetworkStatus() {
  try {
    const allNetworks = await networks.toArray();
    console.log("📊 Network Status:");
    console.log("Total networks:", allNetworks.length);
    console.log("Networks by type:", {
      mainnet: allNetworks.filter((n) => n.type === "mainnet").length,
      testnet: allNetworks.filter((n) => n.type === "testnet").length,
      unknown: allNetworks.filter((n) => n.type === "unknown").length,
    });

    if (allNetworks.length > 0) {
      console.log(
        "Sample networks:",
        allNetworks.slice(0, 5).map((n) => ({
          name: n.name,
          chainId: n.chainId,
          type: n.type,
        })),
      );
    }

    return allNetworks;
  } catch (error) {
    console.error("❌ Failed to check network status:", error);
    return [];
  }
}

// Make functions available globally for debugging
if (typeof window !== "undefined") {
  (window as any).resetDefaultNetworks = resetDefaultNetworks;
  (window as any).checkNetworkStatus = checkNetworkStatus;
}
