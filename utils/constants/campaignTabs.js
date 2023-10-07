const generateRouteString = (id, path) => {
  return `/campaigns/${id}/${path.toLowerCase()}`;
};

export const campaignTabs = (campaignId, path) => {
  return [
    {
      name: 'Analytics',
      route: `/campaigns/${campaignId}/analytics`,
      isActive: path === `/campaigns/${campaignId}/analytics`,
    },
    {
      name: 'Leads',
      route: `/campaigns/${campaignId}/leads`,
      isActive: path === `/campaigns/${campaignId}/leads`,
    },
    {
      name: 'Sequences',
      route: `/campaigns/${campaignId}/sequences`,
      isActive: path === `/campaigns/${campaignId}/sequences`,
    },
    {
      name: 'Schedule',
      route: `/campaigns/${campaignId}/schedule`,
      isActive: path === `/campaigns/${campaignId}/schedule`,
    },
    {
      name: 'Options',
      route: `/campaigns/${campaignId}/options`,
      isActive: path === `/campaigns/${campaignId}/options`,
    },
    {
      name: 'Subsequenes',
      route: `/campaigns/${campaignId}/subsequences`,
      isActive: path === `/campaigns/${campaignId}/subsequences`,
    },
  ];
};
