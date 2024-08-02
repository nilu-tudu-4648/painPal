import AppleHealthKit, {
  HealthInputOptions,
  HealthKitPermissions,
} from 'react-native-health';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import {
  initialize,
  requestPermission,
  readRecords,
} from 'react-native-health-connect';
import { TimeRangeFilter } from 'react-native-health-connect/lib/typescript/types/base.types';

const permissions: HealthKitPermissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.FlightsClimbed,
      AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
    ],
    write: [],
  },
};

const useHealthData = (date: Date) => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [steps, setSteps] = useState(0);
  const [flights, setFlights] = useState(0);
  const [distance, setDistance] = useState(0);
  const [sleep, setSleep] = useState(null);

  // iOS - HealthKit
  useEffect(() => {
    if (Platform.OS !== 'ios') {
      return;
    }

    AppleHealthKit.isAvailable((err, isAvailable) => {
      if (err) {
        console.error('Error checking HealthKit availability:', err);
        return;
      }
      if (!isAvailable) {
        console.log('Apple HealthKit not available');
        return;
      }

      AppleHealthKit.initHealthKit(permissions, (err) => {
        if (err) {
          console.error('Error initializing HealthKit:', err);
          return;
        }
        console.log('HealthKit initialized successfully');
        setHasPermissions(true);
      });
    });
  }, []);

  useEffect(() => {
    if (!hasPermissions || Platform.OS !== 'ios') {
      return;
    }

    const options: HealthInputOptions = {
      date: date.toISOString(),
      includeManuallyAdded: false,
    };

    AppleHealthKit.getFlightsClimbed(options, (err, results) => {
      if (err) {
        console.error('Error getting flights climbed:', err);
        return;
      }
      setFlights(results.value);
    });

    AppleHealthKit.getDistanceWalkingRunning(options, (err, results) => {
      if (err) {
        console.error('Error getting walking/running distance:', err);
        return;
      }
      setDistance(results.value);
    });
  }, [hasPermissions, date]);

  // Android - Health Connect
  const readSampleData = async () => {
    console.log('Initializing Health Connect...');
    try {
      const isInitialized = await initialize();
      if (!isInitialized) {
        console.error('Failed to initialize Health Connect');
        return;
      }
  
      console.log('Requesting Health Connect permissions...');
      const permissionsGranted = await requestPermission([
        { accessType: 'read', recordType: 'Steps' },
        { accessType: 'read', recordType: 'Distance' },
        { accessType: 'read', recordType: 'FloorsClimbed' },
        { accessType: 'read', recordType: 'SleepSession' }
    
      ]);
      if (!permissionsGranted) {
        console.error('Permissions not granted');
        return;
      }
  
      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
        endTime: new Date(date.setHours(23, 59, 59, 999)).toISOString(),
      };
  
      try {
        const stepsData = await readRecords('Steps', { timeRangeFilter });
        const totalSteps = stepsData.reduce((sum, cur) => sum + cur.count, 0);
        setSteps(totalSteps);
  
        const distanceData = await readRecords('Distance', { timeRangeFilter });
        const totalDistance = distanceData.reduce((sum, cur) => sum + cur.distance.inMeters, 0);
        setDistance(totalDistance);
  
        const floorsClimbedData = await readRecords('FloorsClimbed', { timeRangeFilter });
        const totalFloors = floorsClimbedData.reduce((sum, cur) => sum + cur.floors, 0);
        setFlights(totalFloors);

        const sleepData = await readRecords('SleepSession', { timeRangeFilter });
        const totalSleep = sleepData.reduce((sum, cur) => sum + cur.duration, 0);
        setSleep(totalSleep);
      } catch (error) {
        console.error('Error reading Health Connect data:', error);
      }
    } catch (error) {
      console.error('Health Connect initialization or permission error:', error);
    }
  };
  

  useEffect(() => {
    if (Platform.OS !== 'android') {
      return;
    }
    readSampleData();
  }, [date]);

  return {
    steps,
    flights,
    distance,
  };
};

export default useHealthData;
