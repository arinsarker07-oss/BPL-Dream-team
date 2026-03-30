import  { use, useState } from 'react';
import Available from '../Available-player/Available';
import Selected from '../selected/Selected'
const Player = ({playerpromise}) => {
console.log(playerpromise);

    const data =use(playerpromise)
    console.log(data);
    const [SelectedType,SetSelectedType]=useState("Available")
    return (
        <div className='container mx-auto'>
                <div className='flex justify-between my-3'>
                   { SelectedType=== "Available" ?
                    <p className='font-bold text-3xl'>Available Players</p>:
                    <p className='font-bold text-3xl'>Selected Player (4/6)</p>}
                    <div className='flex '>
                        <button
                        onClick={()=> SetSelectedType('Available')}
                        className={`btn ${SelectedType=== "Available" ? "bg-[#E7FE29] ":""} rounded-r-none rounded-l-xl`}>Available</button>
                         <button
                        onClick={()=> SetSelectedType('Selected')}
                        className={`btn ${SelectedType=== "Selected"  ? "bg-[#E7FE29] ":""} rounded-l-none rounded-r-xl`}>Selected (0)</button>
                    </div>
                </div>
                {
                    SelectedType==="Available"?
                    <Available data={data}></Available>:
                    <Selected></Selected>
                    }
        </div>
    );
};

export default Player;