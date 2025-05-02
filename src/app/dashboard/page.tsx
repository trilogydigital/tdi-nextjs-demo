import React from 'react'
import "./page.dashboard.css";
import CardContainer from '@/components/CardContainer/CardContainer';
import { fetchDashboardData } from '@/lib/api/contentful';

const DashboardPage = async () => {
  const data = await fetchDashboardData();
  return (
    <div className=''><CardContainer data={data.items}/></div>
  )
}

export default DashboardPage