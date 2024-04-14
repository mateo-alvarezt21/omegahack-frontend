"use client"
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const LineChart = ({ dataCharts }: {dataCharts: any}) => { 
  // Limitar la cantidad de puntos de datos a un máximo de 20
  const limitedData = dataCharts.slice(0, 20);

  // Separar los datos en etiquetas (tiempo) y valores (consumo)
  const labels = limitedData.map((item: any) => item.time);
  const values = limitedData.map((item: any) => parseFloat(item.consume));

  // Calcular los valores mínimo y máximo de los datos de consumo
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  // Definir los valores mínimos y máximos para la escala Y con un margen del 10%
  const minY = Math.floor(minValue * 0.9); // 90% del mínimo
  const maxY = Math.ceil(maxValue * 1.1);   // 110% del máximo

  const midata = {
    labels: labels,
    datasets: [
      {
        label: 'Consumo de energía',
        data: values,
        tension: 0.5,
        fill: true,
        borderColor: '#e35205',
        backgroundColor: 'rgb(227, 82, 5, 0.5)',
        pointRadius: 5,
        pointBorderColor: '#e35205',
        pointBackgroundColor: '#e35205',
      }
    ],
  };

  const misoptions = {
    scales : {
      y : {
        min : minY,
        max : maxY
      },
      x: {
        ticks: { color: '#e35205'}
      }
    }
  };

  return (
    <div className='w-[60%] mx-auto'> {/* Ajustar el margen superior */}
      <Line data={midata} options={misoptions}/>
    </div>
  );
}