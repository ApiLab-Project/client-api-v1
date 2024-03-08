import React from 'react'

export default function TopBox1() {
  return (
    <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
    <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
    <div className="my-1"></div>
    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
    <div className="chart-container" style={{"position": "relative", "height":"150px", "width":"100%"}}>
        <canvas id="usersChart"></canvas>
    </div>
</div>
    )
}
