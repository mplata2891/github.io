// src/data/labs/pool-boy/full-code.cs
using System;
using System.Collections.Generic;

public class Pool
{
    static int poolCount = 0;
    Location location;
    Temperature temperature;
    int idNumber;

    public Pool(int x_Coordinate, int y_Coordinate, int degree, string scale)
    {
        location = new Location(x_Coordinate, y_Coordinate);
        temperature = new Temperature(degree, scale);
        this.idNumber = ++poolCount;
    }

    public Location Location { get => location; set => location = value; }
    public Temperature Temperature { get => temperature; set => temperature = value; }
    public int IdNumber { get => idNumber; }
}

public class MaintenanceCrew
{
    List<Pool> servicedPools;
    Location nextPoolLocation;

    public MaintenanceCrew()
    {
        servicedPools = new List<Pool>();
        nextPoolLocation = new Location();
    }

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

    public void UpdateServicedPoolsList(Pool[] pools)
    {
        foreach (Pool communityPool in pools)
        {
            if(communityPool.Location == nextPoolLocation)
            {
                servicedPools.Add(communityPool);
            }
        }
    }

    public void SetNewTemperature(ref Pool[] pools)
    {
        Random randomTemp = new Random();
        foreach (Pool communityPool in pools)
        {
            if (communityPool.Location == nextPoolLocation)
            {
                communityPool.Temperature.Degree = randomTemp.Next(98, 105);
            }
        }
    }

    public void ReturnToMaintenanceRoom()
    {
        const int ORIGIN = 0;
        nextPoolLocation.X_Coordinate = ORIGIN;
        nextPoolLocation.Y_Coordinate = ORIGIN;
    }
}