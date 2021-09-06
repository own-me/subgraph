import { newNFTMinted } from '../generated/NudeNFT/NudeNFT';
import { NudeNFT } from '../generated/schema';

export function handleNewNFTMinted(event: newNFTMinted): void {
    let nudeNFT = new NudeNFT(event.params.tokenId.toHex());
    nudeNFT.owner = event.params.recipient;
    nudeNFT.tokenURI = event.params.tokenURI;
    nudeNFT.save()
}