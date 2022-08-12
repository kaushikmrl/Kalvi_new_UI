import React from 'react'

function DownloadAds() {
    const downloadImgStyle = 'border-[2px]  rounded-[13px] h-[3rem] w-[10rem] bg-gradient-to-r from-pink-600 to-orange-700'
  return (
    <div className="download">
        <div className="download_images flex">
        <button className={downloadImgStyle + ` mr-[2rem] text-[18px]`}>Connect Wallet</button>
       
        </div>
    </div>
    )
}

export default DownloadAds