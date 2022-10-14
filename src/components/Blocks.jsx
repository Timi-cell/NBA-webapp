import React from "react";
import { Link } from "react-router-dom";
import { Zoom, Fade } from "react-reveal";
const Block = ({ blocks }) => {
  const idNames = (block) => {
    if (block.type == "lg") {
      let val = "large";
      return val;
    } else if (block.type == "md") {
      let val = "medium";
      return val;
    } else {
      let val = "small";
      return val;
    }
  };
  const showBlocks = () => {
    if (blocks) {
      return (
        <div className="blocks_content">
          {blocks.map((block) => {
            return (
              <Zoom key={block.id}>
                <div id={idNames(block)} className="block_head">
                  <Link to={block.link}>
                    <img
                      key={block.id}
                      src={`/images/blocks/${block.image}`}
                      alt={block.image}
                      className={block.type}
                    />
                  </Link>
                  <Fade>
                    <p className="block_title">{block.title}</p>
                  </Fade>
                </div>
              </Zoom>
            );
          })}
        </div>
      );
    }
  };
  return <div className="blocks">{showBlocks()}</div>;
};

export default Block;
