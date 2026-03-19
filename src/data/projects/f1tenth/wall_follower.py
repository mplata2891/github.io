def scan_callback(self, scan_msg):
    # Extract LiDAR ranges and find the distance to the wall
    # F1TENTH cars typically look at 0 degrees (right) and ~30-70 degrees ahead
    theta = math.radians(45) 
    a = scan_msg.ranges[self.get_index(theta, scan_msg)]
    b = scan_msg.ranges[self.get_index(0, scan_msg)]

    # Calculate current distance to the wall (alpha) and future distance
    alpha = math.atan((a * math.cos(theta) - b) / (a * math.sin(theta)))
    current_dist = b * math.cos(alpha)
    
    # Lookahead distance to project error
    future_dist = current_dist + (self.lookahead_dist * math.sin(alpha))
    
    # Compute error and pass to PID controller
    error = self.desired_distance - future_dist
    self.pid_control(error)

def pid_control(self, error):
    # Proportional, Integral, Derivative calculations
    self.integral += error
    derivative = error - self.prev_error
    
    steering_angle = (self.kp * error) + (self.ki * self.integral) + (self.kd * derivative)
    self.prev_error = error

    # Publish Ackermann steering command
    drive_msg = AckermannDriveStamped()
    drive_msg.drive.steering_angle = steering_angle
    drive_msg.drive.speed = self.velocity
    self.pub_drive.publish(drive_msg)