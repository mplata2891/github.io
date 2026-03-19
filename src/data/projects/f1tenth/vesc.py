class VescInterfaceNode(Node):
    def __init__(self):
        super().__init__('vesc_interface_node')
        self.speed_sub = self.create_subscription(SpeedCmd, 'desired_speed', self.speed_callback, 10)
        self.steering_sub = self.create_subscription(SteeringCmd, 'desired_steering', self.steering_callback, 10)
        self.vesc_feedback_pub = self.create_publisher(VescFeedback, 'vesc_feedback', 10)
        self.serial_port = serial.Serial('/dev/ttyUSB0', 115200)

    def speed_callback(self, msg):
        # Serialize ROS 2 message into command format
        command = 'set_speed {}'.format(msg.speed)
        # Send command to VESC over USB serial port
        self.serial_port.write(command.encode())
