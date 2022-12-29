const   AR_PER_KB = 0.002;
const SOL_PER_ITEM = 2 / 1000;
const METADATA_SIZE = 1024;

export const getSolanaPrice = async () => {
  const SOL_PRICE = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      return data.solana.usd;
    })
    .catch(() => {
      return 0;
    });
  return SOL_PRICE;
};

export const toUSD = (solanas, solanaPrice) => {
  return solanas * solanaPrice;
};

export const toSOL = (dollars, solanaPrice) => {
  return dollars / solanaPrice
}


export const calculateFee = (filesize, supply, solanaPrice) => {
  const DATA_KB = (filesize + METADATA_SIZE) / 1024;
  const UploadFeeUSD = DATA_KB * AR_PER_KB;
  const UploadFeeSOL = toSOL(UploadFeeUSD, solanaPrice);
  const SolanaFee = supply * (SOL_PER_ITEM + UploadFeeSOL);
  return SolanaFee;
};
