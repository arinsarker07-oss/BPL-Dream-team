import React from 'react';
import { FaFlag, FaUser } from "react-icons/fa";
const card = ({ data }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 space-x-2'>
                  {data.map((Player) => {
                      console.log(Player);
                      return <div className="card bg-base-100 w-96 shadow-sm">
                          <figure>
                              <img
                                  src={Player.player_image}
                                  alt="plyer" />
                          </figure>
                          <div className="card-body">
                              <h2 className="card-title"><FaUser /> {Player.player_name}</h2>
                              <div className='flex justify-between'>
                                  <div className='flex gap-2 items-center'>
                                      <FaFlag></FaFlag>
                                      <p>{Player.player_country}</p>
                                  </div>
                                  <button className='btn btn-ghost '>{Player.
                                      player_type}</button>
                              </div>
                              <div className="divider"></div>
                              <p>Rating:{Player.rating
                              }</p>
                              <div className='flex justify-end gap-7'>
                                  <p>{Player.batting_style}</p>
                                  <p className='text-right'>{Player.bowling_style}</p>
                              </div>
                              <div className="flex justify-between items-center">
                                  <p>price-120000$</p>
                                  <button className='btn btn-ghost '>Chose player</button>
                              </div>
                          </div>
                      </div>
                  })}
              </div>
    );
};

export default card;