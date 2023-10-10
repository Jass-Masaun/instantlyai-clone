const generateRouteString = (id, path) => {
  return `/campaigns/${id}/${path.toLowerCase()}`;
};

export const campaignTabs = (campaignId, path) => {
  return [
    {
      name: 'Analytics',
      route: `/campaign/${campaignId}/analytics`,
      isActive: path === `/campaign/${campaignId}/analytics`,
    },
    {
      name: 'Leads',
      route: `/campaign/${campaignId}/leads`,
      isActive: path === `/campaign/${campaignId}/leads`,
    },
    {
      name: 'Sequences',
      route: `/campaign/${campaignId}/sequences`,
      isActive: path === `/campaign/${campaignId}/sequences`,
    },
    {
      name: 'Schedule',
      route: `/campaign/${campaignId}/schedule`,
      isActive: path === `/campaign/${campaignId}/schedule`,
    },
    {
      name: 'Options',
      route: `/campaign/${campaignId}/options`,
      isActive: path === `/campaign/${campaignId}/options`,
    },
    {
      name: 'Subsequenes',
      route: `/campaign/${campaignId}/subsequences`,
      isActive: path === `/campaign/${campaignId}/subsequences`,
    },
  ];
};
