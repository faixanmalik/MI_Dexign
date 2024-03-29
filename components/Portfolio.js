import React from 'react'

function Portfolio() {

  const portfolio = [
    {
      id: 1,
      imageUrl: "https://assets.materialup.com/uploads/75fd2a0d-c019-462d-9b5c-57108b2d7d44/preview.png",
    },
    {
      id: 2,
      imageUrl: "https://assets.materialup.com/uploads/e8494b0d-f87f-4ee8-b60b-4501dceadfc8/attachment.png",
    },
    {
      id: 3,
      imageUrl: "https://assets.materialup.com/uploads/f1ea2b15-0b67-45c7-a8af-0df2c49db6f1/preview.png",
    },
    {
      id: 4,
      imageUrl: "https://assets.materialup.com/uploads/9121584a-17f0-4736-a822-d2a77eeb58da/preview.png",
    },
    {
      id: 5,
      imageUrl: "https://assets.materialup.com/uploads/dde865fb-13b3-4fa9-9496-be276c615e23/preview.png",
    },
    {
      id: 6,
      imageUrl: "https://assets.materialup.com/uploads/3375b749-22cb-4857-96a2-8cd47ec01fd5/preview.png",
    },
    {
      id: 7,
      imageUrl: "https://assets.materialup.com/uploads/77ef7d8b-74eb-4afd-a3d9-4f6d1b455bef/preview.png",
    },
    {
      id: 8,
      imageUrl: "https://assets.materialup.com/uploads/76da86d0-405d-4d9f-b158-4c619e8b3fd6/preview.png",
    },
    {
      id: 9,
      imageUrl: "https://assets.materialup.com/uploads/46353b0f-8fcf-4009-aeb2-e3a2dfe7914e/attachment.png",
    },
    {
      id: 10,
      imageUrl: "https://assets.materialup.com/uploads/a0c98e0a-b79f-47c8-b7a0-83c267c2534a/preview.png",
    },
    {
      id: 11,
      imageUrl: "https://assets.materialup.com/uploads/86c034a8-a343-4f85-b10f-5e8aaf7998b7/preview.png",
    },
    {
      id: 12,
      imageUrl: "https://assets.materialup.com/uploads/2bf58e0c-463e-44dc-a04f-08e1aa944b32/preview.png",
    },
    {
      id: 13,
      imageUrl: "https://assets.materialup.com/uploads/e8582c8b-f155-45a6-ad74-14288802fac3/attachment.png",
    },
    {
      id: 14,
      imageUrl: "https://assets.materialup.com/uploads/84a733f6-09ce-4db5-ab1c-f5b5e9ba6cbd/preview.png",
    },
    {
      id: 15,
      imageUrl: "https://assets.materialup.com/uploads/6e323bdf-1571-44f4-bb3e-c7cb08dbab8d/preview.png",
    },
    {
      id: 16,
      imageUrl: "https://assets.materialup.com/uploads/28feabe0-37a3-485a-be3d-0fd43addf35d/preview.png",
    },
    {
      id: 17,
      imageUrl: "https://assets.materialup.com/uploads/031ace78-5722-4681-9515-90237ae36919/attachment.png",
    },
    {
      id: 18,
      imageUrl: "https://assets.materialup.com/uploads/312e2b40-1ec1-4d9a-9a75-cc493fd0212b/attachment.png",
    },
    {
      id: 19,
      imageUrl: "https://assets.materialup.com/uploads/6738a2a1-d835-47f9-b55d-fa9089b126dd/sneakerappdesign.png",
    },
    {
      id: 20,
      imageUrl: "https://assets.materialup.com/uploads/2ae2e00b-88ab-41ce-9158-f3cb903412d1/dribbbleshothd-1.png",
    },
  ]

  return (
    <section className="text-white bg-black body-font">


      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          
          {portfolio.map((item)=>{
            return <div key={item.id} className="w-5/6 lg:w-1/2 py-4 md:py-10 md:pr-5 lg:px-10">
            <div className="flex relative">
              <img alt="portfolio" className="absolute rounded-lg inset-0 w-full h-full" src={item.imageUrl}/>
              <div className="px-8 py-24 sm:py-52 relative w-full bg-gray-800 opacity-0 hover:opacity-80">
                <h2 className="tracking-widest text-2xl text-white">UI UX Dexign</h2>
              </div>
            </div>
          </div>})}         
        </div>
      </div>
    </section>
  )
}

export default Portfolio