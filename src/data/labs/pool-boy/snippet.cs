public void MoveToNextPool(Pool[] pools)
{
    // Max distance calculated from furthest origin bounds (14, 10)
    const double MAX_DISTANCE = 17.205;
    double distance, distanceToNextPool = MAX_DISTANCE;

    // Nearest Neighbor: Find the first pool to service from the origin
    if (servicedPools.Count == 0)
    {
        Location origin = new Location();
        for (int pool = 0; pool < pools.Length; pool++)
        {
            distance = FindDistance(origin, pools[pool].Location);
            if (distance < distanceToNextPool)
            {
                distanceToNextPool = distance;
                nextPoolLocation = pools[pool].Location;
            }
        }
    }
    // Nearest Neighbor: Find the closest unserviced pool from current location
    else
    {
        Location currentPoolLocation = servicedPools[(servicedPools.Count - 1)].Location;
        for (int pool = 0; pool < pools.Length; pool++)
        {
            if (!servicedPools.Contains(pools[pool]))
            {
                distance = FindDistance(currentPoolLocation, pools[pool].Location);
                if (distance < distanceToNextPool)
                {
                    distanceToNextPool = distance;
                    nextPoolLocation = pools[pool].Location;
                }
            }
        }
    }
}

private double FindDistance(Location currentPoolLocation, Location nextPoolLocation)
{
    // Euclidean distance calculation
    double x2_x1 = nextPoolLocation.X_Coordinate - currentPoolLocation.X_Coordinate;
    double y2_y1 = nextPoolLocation.Y_Coordinate - currentPoolLocation.Y_Coordinate;
    
    return Math.Sqrt(Math.Pow(x2_x1, 2) + Math.Pow(y2_y1, 2));
}