import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from 'recharts'

function RadarComponent({ stats }) {
    const data = [{
        subject: "hp",
        A: stats[0].base_stat,
      },
      {
        subject: "atk",
        A: stats[1].base_stat,
      },
      {
        subject: "def",
        A: stats[2].base_stat,
      },
      {
        subject: "sp-atk",
        A: stats[3].base_stat,
      },
      {
        subject: "sp-def",
        A: stats[4].base_stat,
      }
    ]

    return (
        <RadarChart
            cy={135}
            cx={180}
            outerRadius={120}
            width={350}
            height={300}
            data={data}
        >
            <PolarGrid stroke="white"/>
            <PolarAngleAxis
                dataKey="subject"
                tick={{ 
                    fill: 'white',
                    fontSize: 16,
                    dy: 4
                }}
            />
            <PolarRadiusAxis stroke='white' />

            <Radar
                dataKey="A"
                stroke="yellow"
                strokeWidth={3}
                fillOpacity={0.2}
                label={{
                fill: 'none',
                }}
            />
        </RadarChart>
    )
}

export { RadarComponent }