import React from 'react'
import Image from '../elements/Image/Image'

const HomeContet = () => {
  return (
    <section className="p-2 mt-5">
      <div className="d-flex">
        <div className="col p-3">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ante nisl,
            imperdiet pulvinar est semper quis. Donec bibendum purus erat. Curabitur porta eget
            neque at fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla vel odio egestas mauris egestas dictum ut nec sapien.
            Vestibulum pharetra vitae erat ac malesuada. Proin eget augue libero. Curabitur pretium,
            lacus eget consequat placerat, metus neque dignissim nibh, a consectetur ipsum sapien ut
            sapien. Ut id dui sollicitudin, sodales orci id, congue nulla. Vestibulum eros ipsum,
            aliquet sed mattis in, euismod nec urna. Etiam posuere lorem ac orci auctor tempor ac at
            dolor. Nullam tempor ac turpis non iaculis. Sed at tincidunt nibh, maximus vehicula dui.
            Cras sollicitudin elit at libero hendrerit congue. Proin auctor ex enim, et tempor neque
            efficitur sed. Donec ut consectetur erat. Donec eget tincidunt eros, a faucibus purus.
            Suspendisse consectetur sem leo, eu blandit quam elementum eu. Sed consectetur velit nec
            leo tincidunt, ut tempus ligula auctor.
          </p>
        </div>
        <div className="col p-3">
          <div className="d-flex">
            <Image src="https://picsum.photos/250/250" alt="..." />
            <p className="ml-2 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ante nisl,
              imperdiet pulvinar est semper quis. Donec bibendum purus erat. Curabitur porta eget
              neque at fermentum. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla vel odio egestas mauris egestas dictum ut nec
              sapien. Vestibulum pharetra vitae erat ac malesuada. Proin eget augue libero.
              Curabitur pretium, lacus eget consequat placerat, metus neque dignissim nibh, a
              consectetur ipsum sapien ut sapien. Ut id dui sollicitudin, sodales orci id, congue
              nulla.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex mt-3">
        <div className="col p-3">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/gA8cHj3w5XI"
          ></iframe>
        </div>
        <div className="col p-3">
          <div className="d-grid">
            <Image src="https://picsum.photos/150/149" alt="..." />
            <Image src="https://picsum.photos/150/150" alt="..." />
            <Image src="https://picsum.photos/150/151" alt="..." />
            <Image src="https://picsum.photos/149/150" alt="..." />
            <Image src="https://picsum.photos/148/150" alt="..." />
            <Image src="https://picsum.photos/151/150" alt="..." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContet
