import { newNFTMinted } from '../generated/NudeNFT/NudeNFT'
import { NudeNFT } from '../generated/schema'

export function handleNewNFTMinted(event: newNFTMinted): void {
    let nudeNFT = new NudeNFT(event.params.id.toHex());
    nudeNFT.owner = event.params.owner;
    nudeNFT.title = event.params.title;
    nudeNFT.imageUrl = event.params.imageUrl;
    nudeNFT.description = event.params.description;
    nudeNFT.save()
}