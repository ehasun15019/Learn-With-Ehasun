import Image from "next/image";
import React from "react";

const CardDesign = ({ img, title, description, link }) => {
  return (
    <div className="py-4">
      <div className="card-container w-75 md:w-98">
        <div className="card bg-base-300 shadow-sm rounded-lg">
          <figure>
            <Image src={img} alt={title} className="overflow-hidden" />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-[1.3rem]">{title}</h2>
            <p>{description}</p>

            <div className="badge-container flex justify-end mt-3">
              <div className="badge badge-outline bg-[#882727] rounded-0 border-0 p-5">
                On Youtube
              </div>
            </div>
          </div>
        </div>

        <div className="card-actions mt-5">
          <a
            className="btn btn-accent w-full text-[1.2rem] text-black rounded-sm"
            href={link}
            target="_blank"
          >
            Show Class
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
