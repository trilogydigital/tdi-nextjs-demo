export async function fetchDashboardData() {
  const res = await fetch('https://cdn.contentful.com/spaces/r3gw47jq8u96/environments/master/entries', {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer IiIzbb3U4Xk9yEhceFUbHulWgTMzsdbzfztixi9tOyg`,
    }
  });

  if (!res.ok) throw new Error('Failed to fetch dashboard data');
  return res.json();
}
