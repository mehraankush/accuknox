"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "CNNAP",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "CWPP",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "IMAGE",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "TICKET",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig

import React from 'react'

export function ChartsComponent() {
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[120px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie data={chartData} dataKey="visitors" nameKey="browser" />
            </PieChart>
        </ChartContainer>
    )
}
