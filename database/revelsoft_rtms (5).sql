-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 22, 2022 at 08:47 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `revelsoft_rtms`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_default_date`
--

CREATE TABLE `tb_default_date` (
  `default_time` varchar(50) NOT NULL,
  `default_day` varchar(50) NOT NULL,
  `default_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_default_date`
--

INSERT INTO `tb_default_date` (`default_time`, `default_day`, `default_date`) VALUES
('21:22', 'Wednesday', '5');

-- --------------------------------------------------------

--
-- Table structure for table `tb_department`
--

CREATE TABLE `tb_department` (
  `department_code` varchar(50) NOT NULL COMMENT 'รหัส',
  `department_name` varchar(50) NOT NULL COMMENT 'ชื่อ',
  `addby` varchar(50) NOT NULL COMMENT 'เพิ่มโดยใคร',
  `adddate` varchar(50) NOT NULL COMMENT 'เพิ่มวันที่เท่าไร',
  `updateby` varchar(50) NOT NULL COMMENT 'แก้ไขโดยใคร',
  `lastupdate` varchar(50) NOT NULL COMMENT 'แก้ไขวันที่เท่าไร'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_department`
--

INSERT INTO `tb_department` (`department_code`, `department_name`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('DC202111001', 'CNC', '', '', '', ''),
('DC202111002', 'Fitting', '', '', '', ''),
('DC202112001', 'MMC', '', '', '', ''),
('DC202201001', ' ผู้พัฒนาระบบ', '', '', '', ''),
('DC202201002', 'OFFICER', '', '', '', ''),
('DC202201003', 'CNC MANUAL', '', '', '', ''),
('DC202201004', 'FITTING', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_how2buy`
--

CREATE TABLE `tb_how2buy` (
  `how2buy_code` varchar(50) NOT NULL COMMENT 'รหัส',
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสเครื่องมือ',
  `supplier_code` varchar(50) NOT NULL COMMENT 'รหัสผู้ผลิต',
  `how2buy_qty` int(11) NOT NULL COMMENT 'จำนวน',
  `how2buy_price` int(11) NOT NULL COMMENT 'ราคา',
  `how2buy_leadtime` int(11) NOT NULL,
  `how2buy_remark` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_how2buy`
--

INSERT INTO `tb_how2buy` (`how2buy_code`, `product_code`, `supplier_code`, `how2buy_qty`, `how2buy_price`, `how2buy_leadtime`, `how2buy_remark`) VALUES
('20210729-00001', 'PDC202107001', 'SP202105002', 11, 11, 11, '11');

-- --------------------------------------------------------

--
-- Table structure for table `tb_incident`
--

CREATE TABLE `tb_incident` (
  `incident_code` varchar(50) NOT NULL COMMENT 'รหัสเหตุการณ์',
  `incident_name` varchar(50) NOT NULL,
  `job_code` varchar(50) NOT NULL COMMENT 'รหัสงาน',
  `job_op_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสลักษณะของงานเครื่องมือ',
  `machine_code` varchar(50) NOT NULL COMMENT 'รหัสเครื่องจักร',
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสสินค้า',
  `shift` varchar(5) DEFAULT NULL COMMENT 'กะไหน',
  `incident_type_code` varchar(50) NOT NULL COMMENT 'รหัสประเภทเหตุการณ์',
  `user_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'ผู้ใช้เหตุการณ์',
  `incident_date` varchar(50) DEFAULT NULL COMMENT 'เวลาเหตุการณ์',
  `incident_detail` varchar(50) DEFAULT NULL COMMENT 'รายละเอียดเหตุการณ์',
  `incident_image` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'ภาพเครื่องมือ',
  `addby` varchar(50) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='สินค้าเกิดที่การชำรุด';

--
-- Dumping data for table `tb_incident`
--

INSERT INTO `tb_incident` (`incident_code`, `incident_name`, `job_code`, `job_op_code`, `machine_code`, `product_code`, `shift`, `incident_type_code`, `user_code`, `incident_date`, `incident_detail`, `incident_image`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('IC2022003001', 'ฟหกฟหกฟหก', 'JC202201001', 'JOBOP2022010001', 'MC202201001', 'PDC202201002', 'D', 'wornout', 'MTP-U2022001', '2022-03-10', '', '', '', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_incident_type`
--

CREATE TABLE `tb_incident_type` (
  `incident_type_code` varchar(50) NOT NULL COMMENT 'รหัสชนิดเหตุการณ์',
  `incident_type_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อชนิดเหตุการณ์',
  `incident_type_detail` varchar(50) DEFAULT NULL COMMENT 'รายละเอียดชนิดเหตุการณ์'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ประเภทสินค้าที่เกิดการชำรุด';

--
-- Dumping data for table `tb_incident_type`
--

INSERT INTO `tb_incident_type` (`incident_type_code`, `incident_type_name`, `incident_type_detail`) VALUES
('qwe', 'qwe', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_issue`
--

CREATE TABLE `tb_issue` (
  `issue_code` varchar(50) NOT NULL COMMENT 'รหัสปัญหา',
  `user_code` varchar(50) DEFAULT NULL COMMENT 'รหัสผู้ใช้',
  `issue_date` varchar(50) DEFAULT NULL COMMENT 'วันที่เบิก',
  `job_code` varchar(50) DEFAULT NULL COMMENT 'รหัสงาน',
  `job_op_code` varchar(50) DEFAULT NULL COMMENT 'รหัสลักษณะงาน',
  `job_op_tools_code` varchar(50) DEFAULT NULL COMMENT 'รหัสงานเครื่องมือ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='การเบิกสินค้า';

--
-- Dumping data for table `tb_issue`
--

INSERT INTO `tb_issue` (`issue_code`, `user_code`, `issue_date`, `job_code`, `job_op_code`, `job_op_tools_code`) VALUES
('IC202203001', 'U002', '2022-03-18', NULL, NULL, NULL),
('IC202203002', 'U002', '2022-03-21', NULL, NULL, NULL),
('IC202203003', 'U002', '2022-03-21', NULL, NULL, NULL),
('IC202203004', NULL, '2022-03-21', NULL, NULL, NULL),
('IC202203005', NULL, '2022-03-21', NULL, NULL, NULL),
('IC202203006', NULL, '2022-03-21', NULL, NULL, NULL),
('IC202203007', NULL, '2022-03-21', NULL, NULL, NULL),
('IC202203008', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203009', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203010', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203011', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203012', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203013', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203014', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203015', NULL, '2022-03-22', NULL, NULL, NULL),
('IC202203016', NULL, '2022-03-22', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_isuse_list`
--

CREATE TABLE `tb_isuse_list` (
  `isuse_list_code` varchar(50) NOT NULL COMMENT 'รหัสรายการปัญหา',
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสสินค้า',
  `issue_code` varchar(50) NOT NULL COMMENT 'รหัสปัญหา',
  `isuse_list_qty` varchar(50) DEFAULT NULL COMMENT 'จำนวนรายการปัญหา',
  `addby` varchar(50) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='รายการเบิกสินค้า';

--
-- Dumping data for table `tb_isuse_list`
--

INSERT INTO `tb_isuse_list` (`isuse_list_code`, `product_code`, `issue_code`, `isuse_list_qty`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('IC202203001', 'PDC202201002', 'IC202203001', '1', 'U002', '2022-03-18', NULL, NULL),
('IC202203002', 'PDC202201002', 'IC202203001', '1', 'U002', '2022-03-18', NULL, NULL),
('IC202203003', 'PDC202201001', 'IC202203001', '8', 'U002', '2022-03-18', NULL, NULL),
('IC202203004', 'PDC202201001', 'IC202203001', '8', 'U002', '2022-03-18', NULL, NULL),
('IC202203005', 'PDC202201001', 'IC202203001', '1', 'U002', '2022-03-18', NULL, NULL),
('IC202203006', 'PDC202201001', 'IC202203001', '1', 'U002', '2022-03-18', NULL, NULL),
('IC202203007', 'PDC202201001', 'IC202203002', '1', 'U002', '2022-03-21', NULL, NULL),
('IC202203008', 'PDC202201001', 'IC202203003', '1', 'U002', '2022-03-21', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_job`
--

CREATE TABLE `tb_job` (
  `job_code` varchar(50) NOT NULL COMMENT 'รหัสงาน',
  `job_name` varchar(50) DEFAULT NULL COMMENT 'ชื่องาน',
  `job_no` varchar(50) DEFAULT NULL COMMENT 'ลำดับงาน',
  `job_cpp` varchar(50) DEFAULT NULL COMMENT 'งาน',
  `job_start` varchar(50) DEFAULT NULL COMMENT 'เริ่มต้นงาน',
  `job_end` varchar(50) DEFAULT NULL COMMENT 'สิ่นสุดงาน',
  `job_hardness` varchar(50) DEFAULT NULL COMMENT 'ความยากของงาน',
  `job_material` varchar(50) DEFAULT NULL COMMENT 'วัสดุงาน',
  `job_barcode` varchar(50) NOT NULL,
  `deleted` int(11) NOT NULL COMMENT 'ลบ',
  `addby` varchar(50) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='งาน';

--
-- Dumping data for table `tb_job`
--

INSERT INTO `tb_job` (`job_code`, `job_name`, `job_no`, `job_cpp`, `job_start`, `job_end`, `job_hardness`, `job_material`, `job_barcode`, `deleted`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('JC202201001', 'CORE BASE', '23', '10023', '2022-02-16', '2022-01-31', '23', '23', '', 0, 'MTP-U2022001', 'ss', NULL, '2022-02-22 19:36:12'),
('JC202201002', 'CORE INSERT ', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, '2022-01-10 10:47:28'),
('JC202201003', 'SUB INSERT CORE', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201004', 'CAVITY BASE', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201005', 'CAVITY INSERT', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201006', 'SUB INSERT CAVITY', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201007', 'SLIDE', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201008', 'ANGULAR BLOCK', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201009', 'INCLINE SLIDE', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201010', 'EJECTOR BLOCK', '', '', '', '', '', '', '', 0, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201011', ' อื่น ฯ', '', '', '', '', '', '', '', 1, 'MTP-U2022001', 'ss', NULL, NULL),
('JC202201012', '', '', '', '', '', '', '', '', 1, 'U002', 'ss', NULL, NULL),
('JC202201013', '', '', '', '', '', '', '', '', 1, 'U002', 'ss', NULL, NULL),
('JC202201014', '', '', '', '', '', '', '', '', 1, 'U002', 'ss', NULL, NULL),
('JC202201015', 's', '', '', '', '', '', '', '', 1, 'U002', 'ss', NULL, NULL),
('JC202202001', 'asd', 'asd', 'asd', '2022-02-01', '2022-02-08', 'asd', 'asd', '', 1, 'U002', 'ss', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_level_1`
--

CREATE TABLE `tb_job_level_1` (
  `job_level_1_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_job_level_1`
--

INSERT INTO `tb_job_level_1` (`job_level_1_name`) VALUES
('CNC'),
('EDM+WIRECUT'),
('FITTING'),
('MILLING'),
('TEST');

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_level_2`
--

CREATE TABLE `tb_job_level_2` (
  `job_level_1_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `job_level_2_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_job_level_2`
--

INSERT INTO `tb_job_level_2` (`job_level_1_name`, `job_level_2_name`) VALUES
('Job1', 'Job1-2');

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_level_3`
--

CREATE TABLE `tb_job_level_3` (
  `job_level_2_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `job_level_1_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `job_level_3_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_job_level_3`
--

INSERT INTO `tb_job_level_3` (`job_level_2_name`, `job_level_1_name`, `job_level_3_name`) VALUES
('Job1-2', 'Job1', '111');

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_level_4`
--

CREATE TABLE `tb_job_level_4` (
  `job_level_3_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `job_level_2_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `job_level_1_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `job_level_4_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_op`
--

CREATE TABLE `tb_job_op` (
  `job_op_code` varchar(50) NOT NULL COMMENT 'รหัสเปิดงาน',
  `job_code` varchar(50) NOT NULL COMMENT 'รหัสงาน',
  `job_op_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อเปิดงาน',
  `job_op_no` varchar(50) DEFAULT NULL COMMENT 'ลำดับงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ลักษณะของงาน';

--
-- Dumping data for table `tb_job_op`
--

INSERT INTO `tb_job_op` (`job_op_code`, `job_code`, `job_op_name`, `job_op_no`) VALUES
('JOBOP2022010001', 'JC202201001', 'M/C', '1'),
('JOBOP2022010002', 'JC202201001', '1', '1'),
('OP2022020001', 'JC202202001', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_op_machine`
--

CREATE TABLE `tb_job_op_machine` (
  `job_op_machine_code` varchar(50) NOT NULL COMMENT 'รหัสงานเครื่องจักร',
  `job_op_code` varchar(45) NOT NULL COMMENT 'รหัสเปิดงาน',
  `machine_code` varchar(50) NOT NULL COMMENT 'รหัสเครื่องจักร',
  `production` varchar(50) DEFAULT NULL COMMENT 'การผลิต',
  `date_start` varchar(50) DEFAULT NULL COMMENT 'วันที่เริ่มต้น',
  `date_end` varchar(50) DEFAULT NULL COMMENT 'วันที่สิ้นสุด'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='เครื่องจักรที่ใช้กับลักษณะงาน';

--
-- Dumping data for table `tb_job_op_machine`
--

INSERT INTO `tb_job_op_machine` (`job_op_machine_code`, `job_op_code`, `machine_code`, `production`, `date_start`, `date_end`) VALUES
('JOBOPMC2021070001', 'OP2021070001', 'MC202106001', '5', '2021-07-01', '2021-07-02'),
('JOBOPMC2021070002', 'OP2021070001', 'MC202106002', '5', '2021-07-01', '2021-07-02'),
('JOBOPMC2021070003', 'JOBOP2021070001', 'MC202106001', '500', '2021-07-01', '2021-07-02'),
('JOBOPMC2021110001', 'OP2021060002', 'MC202111001', '1000', '2021-11-14', '2021-11-20'),
('JOBOPMC2021110002', 'OP2021060002', '', '', '', ''),
('JOBOPMC2021110003', 'OP2021060003', 'MC202111002', '1000', '2021-11-18', '2021-11-17'),
('JOBOPMC2021110004', 'OP2021060001', 'MC202111003', '2000', '2021-11-07', '2021-11-30'),
('JOBOPMC2021110005', 'OP2021070002', 'MC202111003', '3000', '2021-11-01', '2021-11-30'),
('JOBOPMC2022010001', 'JOBOP2022010001', 'MC202201002', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_op_tools`
--

CREATE TABLE `tb_job_op_tools` (
  `job_op_tools_code` varchar(50) NOT NULL COMMENT 'รหัสเครื่องมือ',
  `job_op_code` varchar(50) NOT NULL COMMENT 'รหัสเปิดงาน',
  `job_op_tools_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อเครื่องมือ',
  `job_op_tools_drawing` varchar(200) DEFAULT NULL COMMENT 'แผนผังเครื่องมือ',
  `job_op_tools_no` varchar(50) DEFAULT NULL COMMENT 'ลำดับเครื่องมือ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='เครื่องที่ใช้ในแต่ลักษณะงาน';

--
-- Dumping data for table `tb_job_op_tools`
--

INSERT INTO `tb_job_op_tools` (`job_op_tools_code`, `job_op_code`, `job_op_tools_name`, `job_op_tools_drawing`, `job_op_tools_no`) VALUES
('JOBOPTOOLS2021070001', 'JOBOP2021070001', 'ps2', NULL, '2'),
('JOBOPTOOLS2022010001', 'JOBOP2022010001', 'rought', NULL, 'rought1'),
('TooL2021060001', 'OP2021060001', 'T01 - Drilling dia 20.2', NULL, '01'),
('TooL2021060002', 'OP2021060001', 'T02 - Boring Dia 12.5', NULL, '02'),
('TooL2021060003', 'OP2021060002', 'T01 - Rough Face', NULL, '01'),
('TooL2021070001', 'OP2021070002', 'Procress No.1', NULL, '1');

-- --------------------------------------------------------

--
-- Table structure for table `tb_job_op_tools_use`
--

CREATE TABLE `tb_job_op_tools_use` (
  `job_op_tools_use_code` varchar(50) NOT NULL COMMENT 'รหัสใช้เครื่องมือ',
  `job_op_tools_code` varchar(45) NOT NULL COMMENT 'รหัสเครื่องมือ',
  `toollife` varchar(45) DEFAULT NULL COMMENT 'อายุของเครื่องมือ',
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสสินค้า',
  `job_op_tools_use_min` varchar(50) DEFAULT NULL COMMENT 'เครื่องมือที่เหลือในปริมาณที่น้อย',
  `job_op_tools_use_max` varchar(50) DEFAULT NULL COMMENT 'เครื่องมือที่เหลือในปริมาณที่มาก',
  `job_op_tools_use_reorder` varchar(50) DEFAULT NULL COMMENT 'เครื่องมือที่ต้องสั่งซื้อใหม่',
  `job_op_tools_use_inactive` varchar(50) DEFAULT NULL COMMENT 'เครื่องมือที่ไม่ได้ใช้งาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='เครื่องมือที่ใช้ในแต่ละลักษณะของงาน';

--
-- Dumping data for table `tb_job_op_tools_use`
--

INSERT INTO `tb_job_op_tools_use` (`job_op_tools_use_code`, `job_op_tools_code`, `toollife`, `product_code`, `job_op_tools_use_min`, `job_op_tools_use_max`, `job_op_tools_use_reorder`, `job_op_tools_use_inactive`) VALUES
('JOBOPMC2021070001', 'TooL2021070001', '5', 'PDC202107001', '5', '5', '5', 'Inactive'),
('JOBOPMC2021070002', 'JOBOPTOOLS2021070001', '500', 'PDC202107001', '500', '500', '1', 'Active'),
('JOBOPMC2021070003', 'JOBOPTOOLS2021070001', '500', 'PDC202107002', '500', '500', '1', 'Inactive'),
('JOBOPMC2021090001', 'JOBOPTOOLS2021070001', '500', 'PDC202109006', '500', '500', '1', 'Active'),
('JOBOPMC2021090002', 'JOBOPTOOLS2021070001', '500', 'PDC202109005', '500', '500', '1', 'Active'),
('JOBOPMC2021090003', 'JOBOPTOOLS2021070001', '500', 'PDC202109004', '500', '500', '1', 'Active'),
('JOBOPMC2021090004', 'JOBOPTOOLS2021070001', '500', 'PDC202109003', '500', '500', '1', 'Active'),
('JOBOPMC2021090005', 'TooL2021060003', '500', 'PDC202109003', '500', '500', '1', 'Active'),
('JOBOPMC2021090006', 'TooL2021060003', '500', 'PDC202109002', '500', '500', '1', 'Active'),
('JOBOPMC2021090007', 'TooL2021060003', '500', 'PDC202109001', '500', '500', '1', 'Active'),
('JOBOPMC2021090008', 'TooL2021060003', '500', 'PDC202107006', '500', '500', '1', 'Active'),
('JOBOPMC2021090009', 'TooL2021060003', '500', 'PDC202109005', '500', '500', '1', 'Active'),
('JOBOPMC2021090010', 'TooL2021060003', '500', 'PDC202109004', '500', '500', '1', 'Active'),
('JOBOPMC2021090011', 'TooL2021060003', '500', 'PDC202109003', '500', '500', '1', 'Active'),
('JOBOPMC2021090012', 'TooL2021060003', '500', 'PDC202107003', '500', '500', '1', 'Active'),
('JOBOPMC2021090013', 'TooL2021060003', '500', 'PDC202107002', '500', '500', '1', 'Active'),
('JOBOPMC2021090014', 'TooL2021060003', '500', 'PDC202107001', '500', '500', '1', 'Active'),
('JOBOPMC2021110001', 'TooL2021060001', '1000', 'PDC202107001', '200', '1000', '400', 'Active'),
('JOBOPMC2021110002', 'TooL2021060001', '2000', 'PDC202107002', '300', '1000', '300', 'Active'),
('JOBOPMC2022010001', 'JOBOPTOOLS2022010001', '100', 'PDC202201001', '100', '11110', '11100', 'Active'),
('JOBOPMC2022010002', 'JOBOPTOOLS2022010001', '100', 'PDC202201002', '120', '110', '100', 'Active'),
('JOBOPMC2022010003', 'JOBOPTOOLS2022010001', '100', 'PDC202201003', '1200', '132', '100', 'Active'),
('JOBOPMC2022010004', 'JOBOPTOOLS2022010001', '100', 'PDC202201004', '1000', '132', '100', 'Active'),
('JOBOPMC2022010005', 'JOBOPTOOLS2022010001', '100', 'PDC202201005', '111', '2222', '100', 'Active'),
('ToolU2021060001', 'TooL2021060001', '100', 'PDC202106004', '10', '50', '20', 'Active'),
('ToolU2021060002', 'TooL2021060002', '150', 'PDC202106002', '20', '80', '40', 'Active'),
('ToolU2021060003', 'TooL2021060003', '300', 'PDC202106004', '15', '30', '90', 'Active'),
('ToolU2021060004', 'TooL2021060004', '500', 'PDC202106002', '30', '40', '90', 'Active'),
('ToolU2021060005', 'TooL2021060005', '350', 'PDC202106004', '30', '80', '40', 'Active'),
('ToolU2021060006', 'TooL2021060006', '450', 'PDC202106003', '40', '90', '50', 'Active'),
('ToolU2021070001', 'TooL2021070001', '5', 'PDC202107001', '5', '5', '5', 'Active'),
('ToolU2021070002', 'TooL2021070001', '100', 'PDC202107004', '10', '100', '50', 'Active'),
('ToolU2021070003', 'TooL2021070001', '100', 'PDC202107005', '10', '100', '50', 'Active'),
('ToolU2021070004', 'TooL2021070001', '100', 'PDC202107006', '10', '100', '50', 'Active'),
('ToolU2021110001', 'TooL2021110001', '77', 'PDC202107001', '7', '7', '7', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `tb_license`
--

CREATE TABLE `tb_license` (
  `license_code` varchar(50) NOT NULL COMMENT 'รหัสการอนุญาติสิทธ์',
  `license_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อการอนุญาติสิทธ์',
  `license_primary` tinyint(1) NOT NULL COMMENT 'สิทธิ์ตั้งต้น',
  `addby` varchar(50) DEFAULT NULL COMMENT 'ผู้เพิ่มข้อมูล',
  `adddate` varchar(50) DEFAULT NULL COMMENT 'วันที่เพิ่ม',
  `updateby` varchar(50) DEFAULT NULL COMMENT 'วันแก้ไข',
  `lastupdate` varchar(50) DEFAULT NULL COMMENT 'วันที่แก้ไขล่าสุด',
  `license_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ตารางสิทธ์การใช้งาน';

--
-- Dumping data for table `tb_license`
--

INSERT INTO `tb_license` (`license_code`, `license_name`, `license_primary`, `addby`, `adddate`, `updateby`, `lastupdate`, `license_time`) VALUES
('L20210005', 'admin', 1, 'U001', '2021-06-01 09:09:54', NULL, '2022-03-17 09:55:18', 800),
('L20220001', 'พนักงานคลังเครื่องมือ', 0, NULL, '2022-01-26 16:27:57', NULL, '2022-03-22 12:08:49', 0),
('L20220002', 'พนักงานทั่วไป', 0, NULL, '2022-01-27 17:21:31', NULL, '2022-03-21 14:40:01', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_machine`
--

CREATE TABLE `tb_machine` (
  `machine_code` varchar(50) NOT NULL COMMENT 'รหัสเครื่องจักร',
  `machine_name` varchar(50) NOT NULL COMMENT 'ชื่อเครื่องจักร',
  `machine_type_code` varchar(50) NOT NULL COMMENT 'รหัสชนิดเครื่องจักร',
  `machine_model_code` varchar(50) NOT NULL COMMENT 'รหัสรุ่นเครื่องจักร',
  `machine_brand_code` varchar(50) NOT NULL COMMENT 'รหัสยี่ห้อเครื่องจักร',
  `machine_detail` varchar(50) DEFAULT NULL COMMENT 'รายละเอียดเครื่องจักร',
  `machine_image` varchar(50) DEFAULT NULL COMMENT 'รูปภาพเครื่องจักร',
  `machine_status` varchar(50) DEFAULT NULL COMMENT 'สถานะเครื่องจักร',
  `machine_spindle` varchar(50) DEFAULT NULL COMMENT 'แกนหมุนเครื่องจักร',
  `machine_barcode` varchar(50) NOT NULL,
  `addby` varchar(50) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='เครื่องจักร';

--
-- Dumping data for table `tb_machine`
--

INSERT INTO `tb_machine` (`machine_code`, `machine_name`, `machine_type_code`, `machine_model_code`, `machine_brand_code`, `machine_detail`, `machine_image`, `machine_status`, `machine_spindle`, `machine_barcode`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('MC202201001', 'Pinnacle 1', 'MTC202106002', 'SP202201002', 'MBC202201002', '', 'machine/ee5b0fa1-0cee-4ac5-9f68-fa71b3488bf1.png', 'Active', '30x30', '', '', '', '', ''),
('MC202201002', 'Pinnacle 2', 'MTC202106002', 'SP202201002', 'MBC202201002', '', 'machine/b1d00d1d-ca74-4a7c-b9fa-7c6f6c603aab.png', 'Active', '', '', '', '', '', ''),
('MC202201003', 'Makino E33', 'MTC202106002', 'SP202201003', 'MBC202110001', '', 'machine/0d90d235-1890-4c84-be13-d64a6065f8d8.jpg', 'Active', '', '', '', '', '', ''),
('MC202201004', 'Moriseiki', 'MTC202106002', 'SP202201004', 'MBC202201001', '', 'machine/44e94d62-3e8f-4b33-b641-bbd533f15b6d.png', 'Active', '', '', '', '', '', ''),
('MC202201005', 'MASAK', 'MTC202106002', 'SP202201005', 'MBC202110002', '', 'machine/c3b451f1-a32d-4537-bfb6-598312cb72c5.png', '', '', '', '', '', '', ''),
('MC202201006', 'Micro', 'MTC202106002', 'SP202201006', 'MBC202201003', '', 'machine/55aceef8-7adc-40dd-8472-8f9c7d78c989.jpg', 'Active', '', '', '', '', '', ''),
('MC202201008', 'WIRE CUT1', 'MTC202201001', 'SP202201008', 'MBC202201005', '', 'machine/dbd749f2-27e0-4582-a419-15c8ed41eb00.jpg', '', '', '', '', '', '', ''),
('MC202201009', 'WIRE CUT2', 'MTC202201001', 'SP202201004', 'MBC202201002', '', 'machine/8db551c3-1ac5-4bdf-84b8-d77defb80119.jpg', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_machine_brand`
--

CREATE TABLE `tb_machine_brand` (
  `machine_brand_code` varchar(50) NOT NULL COMMENT 'รหัสยี่ห้อเครื่องจักร',
  `machine_brand_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อยี่ห้อเครื่องจักร'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ยี่ห้อของเครื่องจักร';

--
-- Dumping data for table `tb_machine_brand`
--

INSERT INTO `tb_machine_brand` (`machine_brand_code`, `machine_brand_name`) VALUES
('MBC202106001', 'Brother'),
('MBC202106002', 'Luzhong'),
('MBC202110001', 'Makino'),
('MBC202110002', 'Mazak'),
('MBC202201001', 'Moriseiki'),
('MBC202201002', 'Pinnacle'),
('MBC202201003', 'Micro Dinamic'),
('MBC202201004', 'ENSHU'),
('MBC202201005', 'SIDICK');

-- --------------------------------------------------------

--
-- Table structure for table `tb_machine_model`
--

CREATE TABLE `tb_machine_model` (
  `machine_model_code` varchar(50) NOT NULL COMMENT 'รหัสรุ่นเครื่องจักร',
  `machine_model_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อรุ่นเครื่องจักร'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='รูปร่างของเครื่องจักร';

--
-- Dumping data for table `tb_machine_model`
--

INSERT INTO `tb_machine_model` (`machine_model_code`, `machine_model_name`) VALUES
('SP202106001', 'Makino V56'),
('SP202106002', 'CK6150D'),
('SP202201002', 'LV116'),
('SP202201003', 'E33'),
('SP202201004', 'Nvd5000 α1'),
('SP202201005', 'SMART 530C'),
('SP202201006', 'MEGA 40'),
('SP202201007', 'ENSHU'),
('SP202201008', 'VZ300L'),
('SP202201009', 'SLN600G');

-- --------------------------------------------------------

--
-- Table structure for table `tb_machine_type`
--

CREATE TABLE `tb_machine_type` (
  `machine_type_code` varchar(50) NOT NULL COMMENT 'รหัสชนิดเครื่องจักร',
  `machine_type_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อชนิดเครื่องจักร'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='เป็นของเครื่องจักร';

--
-- Dumping data for table `tb_machine_type`
--

INSERT INTO `tb_machine_type` (`machine_type_code`, `machine_type_name`) VALUES
('MTC202106001', 'CNC Lathe'),
('MTC202106002', 'CNC Machining Center'),
('MTC202106003', 'Machine Other'),
('MTC202201001', 'WIRE CUT');

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu`
--

CREATE TABLE `tb_menu` (
  `menu_code` varchar(50) NOT NULL COMMENT 'รหัสเมนู',
  `menu_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อเมนู',
  `menu_group` varchar(50) DEFAULT NULL COMMENT 'กลุ่ม',
  `menu_name_en` varchar(50) DEFAULT NULL COMMENT 'ชื่ออังกฤษ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ตารางเมนู';

--
-- Dumping data for table `tb_menu`
--

INSERT INTO `tb_menu` (`menu_code`, `menu_name`, `menu_group`, `menu_name_en`) VALUES
('MU0022', 'ผู้ผลิต', 'vending', 'Vending-Supplier'),
('MU0023', 'งาน', 'vending', 'Vending-Job'),
('MU0024', 'แผนการผลิต', 'vending', 'Vending-Production'),
('MU0025', 'เครื่องจักร', 'vending', 'Vending-Machine'),
('MU0026', 'ผู้ใช้งาน', 'vending', 'Vending-User'),
('MU0027', 'ประเภทผู้ใช้', 'vending', 'Vending-User-type'),
('MU0028', 'ยี่ห้อเครื่องจักร', 'vending', 'Vending-Machine-Brand'),
('MU0029', 'โมเดลเครื่องจักร', 'vending', 'Vending-Machine-Model'),
('MU0030', 'ประเภทเครื่องจักร', 'vending', 'Vending-Machine-Type'),
('MU0031', 'แผนก', 'vending', 'Vending-Department'),
('MU0032', 'คลัง', 'vending', 'Vending-Stock'),
('MU0033', 'ทดสอบ', 'vending', 'Vending-TPR'),
('MU0034', 'สิทธิ์์การใช้งาน', 'vending', 'Vending-License'),
('MU0035', 'เครื่องมือ', 'vending', 'Vending-Product'),
('MU0036', 'ประเภทเครื่องมือ', 'vending', 'Vending-Product-Type'),
('MU0037', 'กลุ่มเครื่องมือ', 'vending', 'Vending-Product-Group'),
('MU0038', 'ยี่ห้อเครื่องมือ', 'vending', 'Vending-Product-Brand'),
('MU0039', 'ช่องวางเครืองมือ', 'vending', 'Vending-Stock-Layout'),
('MU004', 'หน้าหลัก', 'vending', 'Vending-Home'),
('MU0040', 'อายุเครืองมือ', 'vending', 'Vending-Toollife-Record'),
('MU0041', 'ประเภทผู้ใช้', 'vending', 'Vending-User-Type'),
('MU0042', 'รับเครื่องมือ', 'vending', 'Vending-Receive-Tool'),
('MU0043', 'เบิกเครื่องมือ', 'vending', 'Vending-Takeout-Tool'),
('MU0045', 'ใบสั่งซื้อ', 'vending', 'Vending-Reoder'),
('MU0047', 'ตำแหน่งเครื่อง', 'vending', 'Vending-Address'),
('MU0048', 'ตั้งค่าเครื่องผู้ใช้', 'vending', 'Vending-Setting-Another'),
('MU0050', 'ทดสอบเครื่องมือ', 'vending', 'Vending-Success'),
('MU0051', 'สินค้าที่ชำรุด', 'vending', 'Vending-Abnormal'),
('MU0052', 'สินค้าที่ใช้แล้ว', 'vending', 'Vending-Record'),
('MU0053', 'รายงาน', 'vending', 'Vending-Report');

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu_product`
--

CREATE TABLE `tb_menu_product` (
  `product_menu_name` varchar(50) NOT NULL,
  `product_menu_name_ref` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_menu_product`
--

INSERT INTO `tb_menu_product` (`product_menu_name`, `product_menu_name_ref`) VALUES
('Vernier', ''),
('Micro Meter', ''),
('Gate Block', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_permission`
--

CREATE TABLE `tb_permission` (
  `permission_code` varchar(50) NOT NULL COMMENT 'รหัสการอนุญาติการใช้งานเมนู',
  `license_code` varchar(50) NOT NULL COMMENT 'รหัสการอนุญาต',
  `menu_code` varchar(50) NOT NULL COMMENT 'รหัสเมนู',
  `permission_view` int(11) DEFAULT NULL COMMENT 'สิทธิ์ในการแสดง',
  `permission_add` int(11) DEFAULT NULL COMMENT 'สิทธิ์ในการเพิ่ม',
  `permission_del` int(11) DEFAULT NULL COMMENT 'สิทธิ์ในการลบ',
  `permission_edit` int(11) DEFAULT NULL COMMENT 'สิทธิ์ในการแก้ไข',
  `permission_approve` int(11) DEFAULT NULL COMMENT 'สิทธิ์ในการอนุมัติ',
  `permission_cancel` int(11) DEFAULT NULL COMMENT 'สิทธิ์ในการยกเลิก'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ตารางการอนุญาติการใช้งานเมนู';

--
-- Dumping data for table `tb_permission`
--

INSERT INTO `tb_permission` (`permission_code`, `license_code`, `menu_code`, `permission_view`, `permission_add`, `permission_del`, `permission_edit`, `permission_approve`, `permission_cancel`) VALUES
('20220317-00001', 'L20210005', 'MU0022', 1, 1, 1, 1, 1, 1),
('20220317-00002', 'L20210005', 'MU0023', 1, 1, 1, 1, 1, 1),
('20220317-00003', 'L20210005', 'MU0024', 1, 1, 1, 1, 1, 1),
('20220317-00004', 'L20210005', 'MU0025', 1, 1, 1, 1, 1, 1),
('20220317-00005', 'L20210005', 'MU0026', 1, 1, 1, 1, 1, 1),
('20220317-00006', 'L20210005', 'MU0027', 1, 1, 1, 1, 1, 1),
('20220317-00007', 'L20210005', 'MU0028', 1, 1, 1, 1, 1, 1),
('20220317-00008', 'L20210005', 'MU0029', 1, 1, 1, 1, 1, 1),
('20220317-00009', 'L20210005', 'MU0030', 1, 1, 1, 1, 1, 1),
('20220317-00010', 'L20210005', 'MU0031', 1, 1, 1, 1, 1, 1),
('20220317-00011', 'L20210005', 'MU0032', 1, 1, 1, 1, 1, 1),
('20220317-00012', 'L20210005', 'MU0033', 1, 1, 1, 1, 1, 1),
('20220317-00013', 'L20210005', 'MU0034', 1, 1, 1, 1, 1, 1),
('20220317-00014', 'L20210005', 'MU0035', 1, 1, 1, 1, 1, 1),
('20220317-00015', 'L20210005', 'MU0036', 1, 1, 1, 1, 1, 1),
('20220317-00016', 'L20210005', 'MU0037', 1, 1, 1, 1, 1, 1),
('20220317-00017', 'L20210005', 'MU0038', 1, 1, 1, 1, 1, 1),
('20220317-00018', 'L20210005', 'MU0039', 1, 1, 1, 1, 1, 1),
('20220317-00019', 'L20210005', 'MU004', 1, 1, 1, 1, 1, 1),
('20220317-00020', 'L20210005', 'MU0040', 1, 1, 1, 1, 1, 1),
('20220317-00021', 'L20210005', 'MU0041', 1, 1, 1, 1, 1, 1),
('20220317-00022', 'L20210005', 'MU0042', 1, 1, 1, 1, 1, 1),
('20220317-00023', 'L20210005', 'MU0043', 1, 1, 1, 1, 1, 1),
('20220317-00024', 'L20210005', 'MU0045', 1, 1, 1, 1, 1, 1),
('20220317-00025', 'L20210005', 'MU0047', 1, 1, 1, 1, 1, 1),
('20220317-00026', 'L20210005', 'MU0048', 1, 1, 1, 1, 1, 1),
('20220317-00027', 'L20210005', 'MU0050', 1, 1, 1, 1, 1, 1),
('20220317-00028', 'L20210005', 'MU0051', 1, 1, 1, 1, 0, 0),
('20220317-00029', 'L20210005', 'MU0052', 1, 1, 1, 1, 0, 0),
('20220317-00030', 'L20210005', 'MU0053', 1, 1, 1, 1, 0, 0),
('20220321-00001', 'L20220002', 'MU0022', 0, 0, 0, 0, 0, 0),
('20220321-00002', 'L20220002', 'MU0023', 0, 0, 0, 0, 0, 0),
('20220321-00003', 'L20220002', 'MU0024', 0, 0, 0, 0, 0, 0),
('20220321-00004', 'L20220002', 'MU0025', 0, 0, 0, 0, 0, 0),
('20220321-00005', 'L20220002', 'MU0026', 0, 0, 0, 0, 0, 0),
('20220321-00006', 'L20220002', 'MU0027', 0, 0, 0, 0, 0, 0),
('20220321-00007', 'L20220002', 'MU0028', 0, 0, 0, 0, 0, 0),
('20220321-00008', 'L20220002', 'MU0029', 0, 0, 0, 0, 0, 0),
('20220321-00009', 'L20220002', 'MU0030', 0, 0, 0, 0, 0, 0),
('20220321-00010', 'L20220002', 'MU0031', 0, 0, 0, 0, 0, 0),
('20220321-00011', 'L20220002', 'MU0032', 0, 0, 0, 0, 0, 0),
('20220321-00012', 'L20220002', 'MU0033', 0, 0, 0, 0, 0, 0),
('20220321-00013', 'L20220002', 'MU0034', 0, 0, 0, 0, 0, 0),
('20220321-00014', 'L20220002', 'MU0035', 0, 0, 0, 0, 0, 0),
('20220321-00015', 'L20220002', 'MU0036', 0, 0, 0, 0, 0, 0),
('20220321-00016', 'L20220002', 'MU0037', 0, 0, 0, 0, 0, 0),
('20220321-00017', 'L20220002', 'MU0038', 0, 0, 0, 0, 0, 0),
('20220321-00018', 'L20220002', 'MU0039', 0, 0, 0, 0, 0, 0),
('20220321-00019', 'L20220002', 'MU004', 0, 0, 0, 0, 0, 0),
('20220321-00020', 'L20220002', 'MU0040', 0, 0, 0, 0, 0, 0),
('20220321-00021', 'L20220002', 'MU0041', 0, 0, 0, 0, 0, 0),
('20220321-00022', 'L20220002', 'MU0042', 1, 0, 0, 0, 0, 0),
('20220321-00023', 'L20220002', 'MU0043', 1, 0, 0, 0, 0, 0),
('20220321-00024', 'L20220002', 'MU0045', 0, 0, 0, 0, 0, 0),
('20220321-00025', 'L20220002', 'MU0047', 0, 0, 0, 0, 0, 0),
('20220321-00026', 'L20220002', 'MU0048', 0, 0, 0, 0, 0, 0),
('20220321-00027', 'L20220002', 'MU0050', 0, 0, 0, 0, 0, 0),
('20220321-00028', 'L20220002', 'MU0051', 0, 0, 0, 0, 0, 0),
('20220321-00029', 'L20220002', 'MU0052', 0, 0, 0, 0, 0, 0),
('20220321-00030', 'L20220002', 'MU0053', 0, 0, 0, 0, 0, 0),
('20220322-00001', 'L20220001', 'MU0022', 0, 0, 0, 0, 0, 0),
('20220322-00002', 'L20220001', 'MU0023', 0, 0, 0, 0, 0, 0),
('20220322-00003', 'L20220001', 'MU0024', 0, 0, 0, 0, 0, 0),
('20220322-00004', 'L20220001', 'MU0025', 0, 0, 0, 0, 0, 0),
('20220322-00005', 'L20220001', 'MU0026', 1, 0, 0, 1, 0, 0),
('20220322-00006', 'L20220001', 'MU0027', 0, 0, 0, 0, 0, 0),
('20220322-00007', 'L20220001', 'MU0028', 0, 0, 0, 0, 0, 0),
('20220322-00008', 'L20220001', 'MU0029', 0, 0, 0, 0, 0, 0),
('20220322-00009', 'L20220001', 'MU0030', 0, 0, 0, 0, 0, 0),
('20220322-00010', 'L20220001', 'MU0031', 0, 0, 0, 0, 0, 0),
('20220322-00011', 'L20220001', 'MU0032', 0, 0, 0, 0, 0, 0),
('20220322-00012', 'L20220001', 'MU0033', 0, 0, 0, 0, 0, 0),
('20220322-00013', 'L20220001', 'MU0034', 0, 0, 0, 0, 0, 0),
('20220322-00014', 'L20220001', 'MU0035', 0, 0, 0, 0, 0, 0),
('20220322-00015', 'L20220001', 'MU0036', 0, 0, 0, 0, 0, 0),
('20220322-00016', 'L20220001', 'MU0037', 0, 0, 0, 0, 0, 0),
('20220322-00017', 'L20220001', 'MU0038', 0, 0, 0, 0, 0, 0),
('20220322-00018', 'L20220001', 'MU0039', 0, 0, 0, 0, 0, 0),
('20220322-00019', 'L20220001', 'MU004', 0, 0, 0, 0, 0, 0),
('20220322-00020', 'L20220001', 'MU0040', 0, 0, 0, 0, 0, 0),
('20220322-00021', 'L20220001', 'MU0041', 0, 0, 0, 0, 0, 0),
('20220322-00022', 'L20220001', 'MU0042', 1, 0, 0, 0, 0, 0),
('20220322-00023', 'L20220001', 'MU0043', 1, 0, 0, 0, 0, 0),
('20220322-00024', 'L20220001', 'MU0045', 0, 0, 0, 0, 0, 0),
('20220322-00025', 'L20220001', 'MU0047', 0, 0, 0, 0, 0, 0),
('20220322-00026', 'L20220001', 'MU0048', 0, 0, 0, 0, 0, 0),
('20220322-00027', 'L20220001', 'MU0050', 0, 0, 0, 0, 0, 0),
('20220322-00028', 'L20220001', 'MU0051', 0, 0, 0, 0, 0, 0),
('20220322-00029', 'L20220001', 'MU0052', 0, 0, 0, 0, 0, 0),
('20220322-00030', 'L20220001', 'MU0053', 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_product`
--

CREATE TABLE `tb_product` (
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสสินค้า',
  `article_code` varchar(50) NOT NULL COMMENT 'รหัส',
  `internal_code` varchar(50) NOT NULL COMMENT 'รหัส',
  `product_barcode` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รหัสบาโคด',
  `product_type_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ประเภทสินค้า',
  `product_group_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'กลุ่มสินค้า',
  `product_brand_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ยี่ห้อสินค้า',
  `product_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ชื่อสินค้า',
  `product_image` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'รูป',
  `product_amount` int(11) NOT NULL COMMENT 'จำนวนรวมเครื่องมือทั้งหมด',
  `product_package_qty` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'หน่วยต่อจำนวน',
  `product_refill_unit` int(11) NOT NULL COMMENT 'จำนวนต่อการเติม',
  `product_issue_type` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ประเภทการเบิก',
  `product_unit` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'หน่วยต่อการเบิกและการเติม',
  `product_issue_unit` int(11) NOT NULL COMMENT 'จำนวนต่อการเบิก',
  `product_size` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'ขนาดช่อง',
  `product_price` double NOT NULL DEFAULT '0' COMMENT 'ราคาสินค้า',
  `product_rf_price` double NOT NULL DEFAULT '0' COMMENT 'ราคาซ่อม',
  `product_min_qty` int(11) NOT NULL DEFAULT '0',
  `product_safety_qty` int(11) NOT NULL DEFAULT '0',
  `product_max_qty` int(11) NOT NULL DEFAULT '0',
  `product_type_consumable` varchar(50) NOT NULL,
  `product_circulation` int(11) NOT NULL,
  `product_consignment` int(11) NOT NULL,
  `addby` varchar(50) DEFAULT NULL COMMENT 'ใครเป็นเพิ่ม',
  `adddate` varchar(50) DEFAULT NULL COMMENT 'วันเวลาเพิ่ม',
  `updateby` varchar(50) DEFAULT NULL COMMENT 'ใครเป็นอัพเดท',
  `lastupdate` varchar(50) DEFAULT NULL COMMENT 'วันเวลาอัพเดท'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='สินค้า';

--
-- Dumping data for table `tb_product`
--

INSERT INTO `tb_product` (`product_code`, `article_code`, `internal_code`, `product_barcode`, `product_type_code`, `product_group_code`, `product_brand_code`, `product_name`, `product_image`, `product_amount`, `product_package_qty`, `product_refill_unit`, `product_issue_type`, `product_unit`, `product_issue_unit`, `product_size`, `product_price`, `product_rf_price`, `product_min_qty`, `product_safety_qty`, `product_max_qty`, `product_type_consumable`, `product_circulation`, `product_consignment`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('PDC202201001', '754051-14', '', 'PDC202201001', 'PTC202201001', 'PGC202201001', 'PBC202201001', 'BT40 DAI4 L90', 'product/a87793b5-840b-439c-9887-3f160cdc8fa8.jpg', 1, '1', 2, 'Piecemeal', 'piece', 1, '35x15x49', 10000, 0, 1, 4, 10, 'Consumable', 0, 0, 'U002', '2022-01-10 11:51:46', 'U002', '2022-03-17 16:44:23'),
('PDC202201002', '754051-01', 'BT40 DAI6 L90', '', 'PTC202201001', 'PGC202201001', 'PBC202201001', 'BT40 DAI6 L90', '', 4, '1', 1, 'Full', 'piece', 0, '35x15x49', 10000, 0, 1, 3, 10, 'Loan', 0, 0, 'U002', '2022-01-10 12:04:23', 'MTP-U2022001', '2022-01-20 14:00:46'),
('PDC202201003', '754051-02', 'BT40 DAI8 L90', '', 'PTC202201001', 'PGC202201001', 'PBC202201001', 'BT40 DAI8 L90', '', 1, '1', 1, 'Full', 'piece', 0, '35x15x49', 10000, 0, 1, 4, 10, 'Loan', 0, 0, 'U002', '2022-01-10 12:12:24', 'U002', '2022-03-17 16:36:18'),
('PDC202201004', '754051-03', 'BT40 DAI10 L90', '', 'PTC202201001', 'PGC202201001', 'PBC202201001', 'BT40 DAI10 L90', '', 1, '1', 1, 'Full', 'piece', 0, '35x15x49', 10000, 0, 0, 0, 1, 'Loan', 0, 0, 'U002', '2022-01-10 12:13:53', 'U002', '2022-02-23 15:20:10'),
('PDC202201005', '754051-04', 'BT40 DAI12 L90', '', 'PTC202201001', 'PGC202201001', 'PBC202201001', 'BT40 DAI12 L90', '', 1, '1', 1, 'Setpiece', 'piece', 0, '35x15x49', 10000, 0, 0, 0, 1, 'Consumable', 0, 0, 'U002', '2022-01-10 12:14:48', 'U002', '2022-02-23 15:20:06'),
('PDC202203001', 'L200 ', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Vernier Caliper 200', 'product/b2eacae0-1475-4415-b63a-ecfbe8d909a5.jpg', 0, '1', 1, 'Full', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-18 16:33:50', 'MTP-U2022004', '2022-03-22 12:18:36'),
('PDC202203002', 'L300', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Vernier Caliper 300', 'product/bdb44bd5-1e2b-45b9-9a47-94b6572b2338.jpg', 1, '1', 1, 'Full', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-21 08:39:40', 'MTP-U2022004', '2022-03-22 12:25:55'),
('PDC202203003', 'L200 DIGITAL', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Vernier DIGITAL 200', 'product/dc513e57-ad40-4f58-a8c1-c69e0a79acff.jpg', 0, '1', 1, 'Full', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 0, 'U002', '2022-03-21 08:48:42', 'MTP-U2022004', '2022-03-22 12:19:29'),
('PDC202203004', '0-25 DIGITAL', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Micro Meter 0-25 DIGITAL ', 'product/96e4ef20-5214-4621-9d0e-0672fa07c555.jpg', 2, '1', 1, 'Setpiece', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-21 08:52:57', 'MTP-U2022004', '2022-03-22 13:08:01'),
('PDC202203005', '25-50 Analog', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Micro Meter 25-50 Analog', 'product/73a32f6f-c0a5-4aa3-93b2-e853bb0ca4d1.jpg', 1, '1', 1, 'Setpiece', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-21 08:54:01', 'MTP-U2022004', '2022-03-22 12:13:38'),
('PDC202203006', '50-75 Digital', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Micro Meter 50-75 Digital', 'product/2f44d6ee-f3b6-4c67-99bf-2f48de5264f6.jpg', 1, '1', 1, 'Setpiece', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-21 08:54:44', 'MTP-U2022004', '2022-03-22 12:15:01'),
('PDC202203007', '50-75 Analog', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Micro Meter 50-75 Analog', 'product/b31fa379-5edf-4229-9a3c-dc1e61ddc999.jpg', 1, '1', 1, 'Setpiece', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-21 08:55:53', 'MTP-U2022004', '2022-03-22 12:15:20'),
('PDC202203008', 'sd', 'asd', '', 'PTC202201001', 'PGC202201001', 'PBC202201001', 'asd', '', 0, '11', 11, 'Full', 'box', 0, '120x11x11 ยาว', 1111, 0, 0, 0, 0, 'Consumable', 0, 0, 'U002', '2022-03-21 08:57:36', NULL, NULL),
('PDC202203009', '25-50 D-EDM/WC', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Micro Meter 25-50 Digital EDM', 'product/0a32b0a9-7f4c-4046-8d6e-d44543292a9c.jpg', 1, '1', 1, 'Setpiece', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-21 09:00:09', 'MTP-U2022004', '2022-03-22 12:12:59'),
('PDC202203010', '', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Gate Block', '', 1, '1', 1, 'Setpiece', 'box', 0, '35x15x49 ยาว', 1, 0, 1, 1, 1, 'Consumable', 0, 1, 'U002', '2022-03-21 09:05:33', 'MTP-U2022004', '2022-03-21 14:38:00'),
('PDC202203011', 'L200 DIGITAL', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Vernier 200 Digital', '', 1, '1', 1, 'Setpiece', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 1, 'U002', '2022-03-21 09:10:04', 'MTP-U2022004', '2022-03-22 12:20:40'),
('PDC202203012', '0-25 Analog', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Micro 0-25 Analog', '', 1, '1', 1, 'Full', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 0, 'MTP-U2022004', '2022-03-22 11:29:04', 'MTP-U2022004', '2022-03-22 12:20:03'),
('PDC202203013', '0-25 D-QC', '', '', 'PTC202203001', 'PGC202203001', 'PBC202203001', 'Micro 0-25 Digital QC', '', 0, '1', 1, 'Full', 'piece', 0, '35x15x49 ยาว', 1, 0, 1, 1, 0, 'Consumable', 0, 0, 'MTP-U2022004', '2022-03-22 11:35:03', 'MTP-U2022004', '2022-03-22 12:16:38');

-- --------------------------------------------------------

--
-- Table structure for table `tb_production`
--

CREATE TABLE `tb_production` (
  `production_code` varchar(50) NOT NULL COMMENT 'รหัส',
  `job_code` varchar(50) NOT NULL COMMENT 'รหัสงาน',
  `production_date` varchar(10) NOT NULL COMMENT 'วันที่ผลิต',
  `production_qty` varchar(10) NOT NULL COMMENT 'เป้าหมายที่ตั้งไว้',
  `production_really` varchar(10) NOT NULL COMMENT 'ได้จริง',
  `addby` varchar(50) NOT NULL COMMENT 'ใครเป็นคนเพิ่ม',
  `adddate` varchar(10) NOT NULL COMMENT 'วันที่เพิ่ม',
  `updateby` varchar(50) NOT NULL COMMENT 'ใครเป็นคนแก้ไข',
  `lastupdate` varchar(10) NOT NULL COMMENT 'วันที่แก้ไข'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='แผนการผลิต';

-- --------------------------------------------------------

--
-- Table structure for table `tb_product_brand`
--

CREATE TABLE `tb_product_brand` (
  `product_brand_code` varchar(50) NOT NULL COMMENT 'รหัสยี่ห้อสินค้า',
  `product_brand_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อยี่ห้อสินค้า'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ยี่ห้อ';

--
-- Dumping data for table `tb_product_brand`
--

INSERT INTO `tb_product_brand` (`product_brand_code`, `product_brand_name`) VALUES
('PBC202201001', 'SHUSSLER'),
('PBC202203001', 'AA');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product_group`
--

CREATE TABLE `tb_product_group` (
  `product_group_code` varchar(50) NOT NULL COMMENT 'รหัสกลุ่มสินค้า',
  `product_group_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อกลุ่มสินค้า'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='กลุ่มสินค้า';

--
-- Dumping data for table `tb_product_group`
--

INSERT INTO `tb_product_group` (`product_group_code`, `product_group_name`) VALUES
('PGC202201001', 'CNC MACHINING CENTER'),
('PGC202201002', 'WIRE CUT'),
('PGC202203001', 'เครื่องมือวัด');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product_menu_list`
--

CREATE TABLE `tb_product_menu_list` (
  `product_menu_name` varchar(50) NOT NULL,
  `product_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_product_menu_list`
--

INSERT INTO `tb_product_menu_list` (`product_menu_name`, `product_code`) VALUES
('Gate Block', 'PDC202203010'),
('Micro Meter', 'PDC202203004'),
('Micro Meter', 'PDC202203005'),
('Micro Meter', 'PDC202203006'),
('Micro Meter', 'PDC202203007'),
('Micro Meter', 'PDC202203009'),
('Micro Meter', 'PDC202203012'),
('Micro Meter', 'PDC202203013'),
('Vernier', 'PDC202203001'),
('Vernier', 'PDC202203002'),
('Vernier', 'PDC202203003'),
('Vernier', 'PDC202203011');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product_type`
--

CREATE TABLE `tb_product_type` (
  `product_type_code` varchar(50) NOT NULL COMMENT 'รหัสประเภท',
  `product_type_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อประเภท'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ประเภทสินค้า';

--
-- Dumping data for table `tb_product_type`
--

INSERT INTO `tb_product_type` (`product_type_code`, `product_type_name`) VALUES
('PTC202201001', 'ARBOR'),
('PTC202203001', 'เครื่องมือวัด');

-- --------------------------------------------------------

--
-- Table structure for table `tb_record`
--

CREATE TABLE `tb_record` (
  `records_code` varchar(50) NOT NULL,
  `product_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `records_date` varchar(50) DEFAULT NULL,
  `record_toolife` int(11) DEFAULT NULL,
  `addby` varchar(50) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_record`
--

INSERT INTO `tb_record` (`records_code`, `product_code`, `records_date`, `record_toolife`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('RC202201001', 'PDC202201003', '2022-01-18', 1000, NULL, NULL, NULL, NULL),
('RC202202001', 'PDC202201002', '2022-02-16', 1000, 'U002', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_reorder`
--

CREATE TABLE `tb_reorder` (
  `reorders_code` varchar(50) NOT NULL COMMENT 'รหัสการสั่งซื้อ',
  `reorders_date` varchar(50) DEFAULT NULL COMMENT 'วันที่สั่งซื้อ',
  `reoders_usercreator` varchar(50) NOT NULL,
  `suppliers_code` varchar(50) DEFAULT NULL COMMENT 'รหัสผู้ผลิต',
  `reorders_name` varchar(50) DEFAULT NULL COMMENT 'ชือ\n',
  `reoders_remark` varchar(200) DEFAULT NULL COMMENT 'หมายเหตุ',
  `addby` varchar(50) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='การรับสินค้าเข้าคลัง';

--
-- Dumping data for table `tb_reorder`
--

INSERT INTO `tb_reorder` (`reorders_code`, `reorders_date`, `reoders_usercreator`, `suppliers_code`, `reorders_name`, `reoders_remark`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('RO202203001', '2022-03-16', 'admin admin', '', '1111111111', '', 'U002', '2022-03-16  16:31:14', NULL, NULL),
('SP202202002', '', '', 'SP202105002', 'asdasd', 'asdasdad', NULL, NULL, NULL, NULL),
('SP202202003', '', '', 'SP202201001', '1212', '121', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_reorder_list`
--

CREATE TABLE `tb_reorder_list` (
  `reoder_list_code` varchar(50) NOT NULL COMMENT 'รหัสรายการสั่งซื้อ',
  `reorders_code` varchar(50) NOT NULL COMMENT 'รหัสการสี่งซื้อ',
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสสินค้า',
  `reoder_list_qty` varchar(50) DEFAULT NULL COMMENT 'จำนวนรายการสั่งซื้อ',
  `reoder_list_price` varchar(50) DEFAULT NULL COMMENT 'ราคารายการสั่งซื้อ',
  `reoder_list_total` varchar(50) DEFAULT NULL COMMENT 'รวมรายการสั่งซื้อ',
  `addby` int(11) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='รายการการรับสินค้าเข้าคลัง';

--
-- Dumping data for table `tb_reorder_list`
--

INSERT INTO `tb_reorder_list` (`reoder_list_code`, `reorders_code`, `product_code`, `reoder_list_qty`, `reoder_list_price`, `reoder_list_total`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('ROL202203001', 'RO202203001', 'PDC202201001', '1', '', '0', 0, '2022-03-16  16:31:14', NULL, NULL),
('ROL202203002', 'RO202203001', 'PDC202201001', '1', '', '0', 0, '2022-03-16  16:31:14', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_report_setting`
--

CREATE TABLE `tb_report_setting` (
  `report_setting_code` varchar(50) NOT NULL,
  `email_service` varchar(200) NOT NULL,
  `email_user` varchar(200) NOT NULL,
  `email_password` varchar(200) NOT NULL,
  `email_signature` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_report_setting`
--

INSERT INTO `tb_report_setting` (`report_setting_code`, `email_service`, `email_user`, `email_password`, `email_signature`) VALUES
('REPORT-SETTING', 'gmail', 'rvscs.service@gmail.com', 'Revel1234Soft@', 'Revel Soft Co., Ltd.           \n    271/55 Trokwatthatako, Tambon Nai Mueang, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000           \n    Tel. +6698-7877899');

-- --------------------------------------------------------

--
-- Table structure for table `tb_return`
--

CREATE TABLE `tb_return` (
  `return_code` varchar(50) NOT NULL COMMENT 'รหัสส่งคืน',
  `return_date` varchar(50) DEFAULT NULL COMMENT 'วันที่ส่งคืน',
  `user_code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `return_status` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'สถานะ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ส่งของคืนผู้ขาย';

--
-- Dumping data for table `tb_return`
--

INSERT INTO `tb_return` (`return_code`, `return_date`, `user_code`, `return_status`) VALUES
('RTC202203001', '', 'U002', 'borrow');

-- --------------------------------------------------------

--
-- Table structure for table `tb_return_list`
--

CREATE TABLE `tb_return_list` (
  `return_list_code` varchar(50) NOT NULL COMMENT 'รหัสรายการส่งคืน',
  `return_code` varchar(50) NOT NULL COMMENT 'รหัสส่งคืน',
  `return_list_status` varchar(50) DEFAULT NULL,
  `product_code` varchar(50) DEFAULT NULL,
  `product_status` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='การรายส่งของคืนผู้ขาย';

--
-- Dumping data for table `tb_return_list`
--

INSERT INTO `tb_return_list` (`return_list_code`, `return_code`, `return_list_status`, `product_code`, `product_status`) VALUES
('RLC202203001', 'RTC202203001', 'borrow', 'PDC202203001', 'normal');

-- --------------------------------------------------------

--
-- Table structure for table `tb_send_setting`
--

CREATE TABLE `tb_send_setting` (
  `send_setting_code` varchar(100) NOT NULL,
  `send_setting_name` varchar(200) DEFAULT '-',
  `send_setting_time` varchar(200) DEFAULT '00.00',
  `send_setting_date` varchar(50) NOT NULL,
  `send_setting_time_type` varchar(50) NOT NULL,
  `send_setting_receive` int(11) DEFAULT '0',
  `send_setting_issue` int(11) DEFAULT '0',
  `send_setting_balance` int(11) DEFAULT '0',
  `send_setting_incident` int(11) DEFAULT '0',
  `send_setting_transaction` int(11) DEFAULT '0',
  `send_setting_low_stock` int(11) DEFAULT '0',
  `send_setting_issue_alway` int(11) DEFAULT '0',
  `addby` varchar(100) DEFAULT '',
  `adddate` varchar(100) DEFAULT '',
  `updateby` varchar(100) DEFAULT '',
  `lastupdate` varchar(100) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ตารางตั้งค่าการส่งรายงาน';

--
-- Dumping data for table `tb_send_setting`
--

INSERT INTO `tb_send_setting` (`send_setting_code`, `send_setting_name`, `send_setting_time`, `send_setting_date`, `send_setting_time_type`, `send_setting_receive`, `send_setting_issue`, `send_setting_balance`, `send_setting_incident`, `send_setting_transaction`, `send_setting_low_stock`, `send_setting_issue_alway`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('SSR0002', 'asdsadasd', '04:00', '25', 'EveryMonth', 1, 1, 1, 0, 0, 0, 0, NULL, '2022-02-13 23:52:39', NULL, '2022-02-17 17:12:57'),
('SSR0003', 'revent goods', '01:02', '', 'EveryDay', 0, 0, 0, 0, 0, 0, 1, NULL, '2022-02-17 11:06:53', NULL, '2022-03-22 11:56:47'),
('SSR0004', 'conclusion', '17:30', 'Friday', 'EveryWeek', 1, 1, 1, 0, 1, 0, 0, NULL, '2022-03-22 11:56:27', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_send_setting_list`
--

CREATE TABLE `tb_send_setting_list` (
  `send_setting_code` varchar(100) NOT NULL,
  `send_setting_email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `send_setting_list_remark` varchar(200) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_send_setting_list`
--

INSERT INTO `tb_send_setting_list` (`send_setting_code`, `send_setting_email`, `send_setting_list_remark`) VALUES
('SSR0002', 'locklee.on@gmail.com', NULL),
('SSR0003', 'locklee.on@gmail.com', NULL),
('SSR0003', 'nuttapong@toolmanagement.co.th', NULL),
('SSR0004', 'nuttapong@toolmanagement.co.th', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_stock`
--

CREATE TABLE `tb_stock` (
  `stock_code` varchar(50) NOT NULL COMMENT 'รหัสคลัง',
  `stock_type` varchar(50) NOT NULL,
  `stock_name` varchar(50) DEFAULT NULL COMMENT 'ชื้อคลัง',
  `remark` varchar(50) DEFAULT NULL COMMENT 'หมายเหตุ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='คลังสินค้า';

--
-- Dumping data for table `tb_stock`
--

INSERT INTO `tb_stock` (`stock_code`, `stock_type`, `stock_name`, `remark`) VALUES
('SC001', 'Locker', 'Locker', ''),
('SC002', 'Rotating', 'ThaiMold L01', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_stock_layout`
--

CREATE TABLE `tb_stock_layout` (
  `stock_layout_code` varchar(50) NOT NULL COMMENT 'รหัสคลังสินค้า',
  `stock_code` varchar(50) NOT NULL COMMENT 'รหัสคลัง',
  `stock_type` varchar(50) NOT NULL,
  `stock_x` varchar(50) DEFAULT NULL COMMENT 'คลังสินค้า x',
  `stock_y` varchar(50) DEFAULT NULL COMMENT 'คลังสินค้า y',
  `stock_z` varchar(50) DEFAULT NULL COMMENT 'คลังสินค้า z',
  `stock_use` varchar(50) DEFAULT NULL COMMENT 'ผู้ดูแลคลังสินค้า',
  `stock_status` varchar(50) NOT NULL,
  `width` varchar(50) NOT NULL,
  `length` varchar(50) NOT NULL,
  `height` varchar(50) NOT NULL,
  `stock_layout_qty` int(11) NOT NULL,
  `product_code` varchar(50) NOT NULL,
  `stock_date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='เค้าโครงคลังสินค้า';

--
-- Dumping data for table `tb_stock_layout`
--

INSERT INTO `tb_stock_layout` (`stock_layout_code`, `stock_code`, `stock_type`, `stock_x`, `stock_y`, `stock_z`, `stock_use`, `stock_status`, `width`, `length`, `height`, `stock_layout_qty`, `product_code`, `stock_date`) VALUES
('SC001-01-01', 'SC001', 'Headland', '01', '01', '0', '0', '', '35', '49', '15', 0, '', '2021-11-30  14:23:01'),
('SC001-01-02', 'SC001', 'Headland', '02', '01', '0', '0', '', '35', '49', '15', 0, '', '2022-03-17  16:17:45'),
('SC001-02-01', 'SC001', 'Long', '01', '02', '0', '2', 'New', '35', '49', '15', 1, 'PDC202203011', '2022-03-22  14:07:22'),
('SC001-02-02', 'SC001', 'Headland', '02', '02', '0', '0', '', '35', '49', '15', 0, '', '2022-03-21  10:20:36'),
('SC001-03-01', 'SC001', 'Headland', '01', '03', '0', '2', 'New', '35', '49', '15', 0, 'PDC202203010', '2022-03-16  16:17:44'),
('SC001-03-02', 'SC001', 'Long', '02', '03', '0', '0', '', '35', '49', '15', 0, '', '2022-03-21  10:20:39'),
('SC001-04-01', 'SC001', 'Headland', '01', '04', '0', '2', 'New', '35', '49', '15', 1, 'PDC202203009', '2022-03-22  12:10:22'),
('SC001-04-02', 'SC001', 'Headland', '02', '04', '0', '0', '', '35', '49', '15', 0, '', '2022-03-17  16:34:08'),
('SC001-05-01', 'SC001', 'Long', '01', '05', '0', '2', 'New', '35', '49', '15', 0, 'PDC202203008', '2022-03-21  09:44:05'),
('SC001-05-02', 'SC001', 'Headland', '02', '05', '0', '0', '', '35', '49', '15', 0, '', '2022-03-21  09:44:19'),
('SC001-06-01', 'SC001', 'Headland', '01', '06', '0', '2', 'New', '35', '49', '15', 1, 'PDC202203007', '2022-03-22  11:23:16'),
('SC001-06-02', 'SC001', 'Long', '02', '06', '0', '2', 'New', '35', '49', '15', 0, 'PDC202203013', '2022-03-22  13:50:25'),
('SC001-07-01', 'SC001', 'Headland', '01', '07', '0', '2', 'New', '35', '49', '15', 1, 'PDC202203006', '2022-03-22  11:21:48'),
('SC001-07-02', 'SC001', 'Headland', '02', '07', '0', '2', 'New', '35', '49', '15', 1, 'PDC202203012', '2022-03-22  11:29:38'),
('SC001-08-01', 'SC001', '', '01', '08', '0', '2', 'New', '120', '11', '11', 1, 'PDC202203005', '2022-03-22  11:23:36'),
('SC001-08-02', 'SC001', '', '02', '08', '0', '0', '', '120', '11', '11', 0, '', '2022-03-21  11:44:06'),
('SC001-09-01', 'SC001', '', '01', '09', '0', '2', 'New', '22', '22', '22', 1, 'PDC202203004', '2022-03-22  14:08:34'),
('SC001-09-02', 'SC001', '', '02', '09', '0', '0', '', '22', '22', '22', 0, '', '2022-03-18  15:36:31'),
('SC001-10-01', 'SC001', '', '01', '10', '0', '2', 'New', '33', '33', '33', 0, 'PDC202203003', '2022-03-22  14:07:48'),
('SC001-10-02', 'SC001', '', '02', '10', '0', '2', 'New', '33', '33', '33', 1, 'PDC202203004', '2022-03-22  11:36:04'),
('SC001-11-01', 'SC001', '', '01', '11', '0', '2', 'New', '22', '22', '22', 1, 'PDC202201001', '2022-03-21  10:38:41'),
('SC001-11-02', 'SC001', '', '02', '11', '0', '2', 'New', '22', '22', '22', 1, 'PDC202203002', '2022-03-22  11:50:26'),
('SC001-12-01', 'SC001', '', '01', '12', '0', '2', 'New', '22', '22', '22', 0, 'PDC202201005', '2022-03-18  15:32:36'),
('SC001-12-02', 'SC001', '', '02', '12', '0', '2', 'New', '22', '22', '22', 0, 'PDC202203001', '2022-03-22  13:59:30'),
('SC002-01-01', 'SC002', '', '01', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-02', 'SC002', '', '02', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-03', 'SC002', '', '03', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-04', 'SC002', '', '04', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-05', 'SC002', '', '05', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-06', 'SC002', '', '06', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-07', 'SC002', '', '07', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-08', 'SC002', '', '08', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-09', 'SC002', '', '09', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-10', 'SC002', '', '10', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-11', 'SC002', '', '11', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-12', 'SC002', '', '12', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-13', 'SC002', '', '13', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-14', 'SC002', '', '14', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-15', 'SC002', '', '15', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-16', 'SC002', '', '16', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-17', 'SC002', '', '17', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-18', 'SC002', '', '18', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-19', 'SC002', '', '19', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-20', 'SC002', '', '20', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-21', 'SC002', '', '21', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-22', 'SC002', '', '22', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-23', 'SC002', '', '23', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-24', 'SC002', '', '24', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-25', 'SC002', '', '25', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-26', 'SC002', '', '26', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-27', 'SC002', '', '27', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-28', 'SC002', '', '28', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-29', 'SC002', '', '29', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-30', 'SC002', '', '30', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-31', 'SC002', '', '31', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-32', 'SC002', '', '32', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-33', 'SC002', '', '33', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-34', 'SC002', '', '34', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-35', 'SC002', '', '35', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-36', 'SC002', '', '36', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-37', 'SC002', '', '37', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-38', 'SC002', '', '38', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-39', 'SC002', '', '39', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-40', 'SC002', '', '40', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-41', 'SC002', '', '41', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-42', 'SC002', '', '42', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-43', 'SC002', '', '43', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-44', 'SC002', '', '44', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-45', 'SC002', '', '45', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-46', 'SC002', '', '46', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-47', 'SC002', '', '47', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-48', 'SC002', '', '48', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-49', 'SC002', '', '49', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-50', 'SC002', '', '50', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-51', 'SC002', '', '51', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-52', 'SC002', '', '52', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-53', 'SC002', '', '53', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-54', 'SC002', '', '54', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-55', 'SC002', '', '55', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-56', 'SC002', '', '56', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-57', 'SC002', '', '57', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-58', 'SC002', '', '58', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-59', 'SC002', '', '59', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-60', 'SC002', '', '60', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-61', 'SC002', '', '61', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-62', 'SC002', '', '62', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-63', 'SC002', '', '63', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-64', 'SC002', '', '64', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-65', 'SC002', '', '65', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-66', 'SC002', '', '66', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-67', 'SC002', '', '67', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-68', 'SC002', '', '68', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-69', 'SC002', '', '69', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-70', 'SC002', '', '70', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-71', 'SC002', '', '71', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-01-72', 'SC002', '', '72', '01', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-01', 'SC002', '', '01', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-02', 'SC002', '', '02', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-03', 'SC002', '', '03', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-04', 'SC002', '', '04', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-05', 'SC002', '', '05', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-06', 'SC002', '', '06', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-07', 'SC002', '', '07', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-08', 'SC002', '', '08', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-09', 'SC002', '', '09', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-10', 'SC002', '', '10', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-11', 'SC002', '', '11', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-12', 'SC002', '', '12', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-13', 'SC002', '', '13', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-14', 'SC002', '', '14', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-15', 'SC002', '', '15', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-16', 'SC002', '', '16', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-17', 'SC002', '', '17', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-18', 'SC002', '', '18', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-19', 'SC002', '', '19', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-20', 'SC002', '', '20', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-21', 'SC002', '', '21', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-22', 'SC002', '', '22', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-23', 'SC002', '', '23', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-24', 'SC002', '', '24', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-25', 'SC002', '', '25', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-26', 'SC002', '', '26', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-27', 'SC002', '', '27', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-28', 'SC002', '', '28', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-29', 'SC002', '', '29', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-30', 'SC002', '', '30', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-31', 'SC002', '', '31', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-32', 'SC002', '', '32', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-33', 'SC002', '', '33', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-34', 'SC002', '', '34', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-35', 'SC002', '', '35', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-36', 'SC002', '', '36', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-37', 'SC002', '', '37', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-38', 'SC002', '', '38', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-39', 'SC002', '', '39', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-40', 'SC002', '', '40', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-41', 'SC002', '', '41', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-42', 'SC002', '', '42', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-43', 'SC002', '', '43', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-44', 'SC002', '', '44', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-45', 'SC002', '', '45', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-46', 'SC002', '', '46', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-47', 'SC002', '', '47', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-48', 'SC002', '', '48', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-49', 'SC002', '', '49', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-50', 'SC002', '', '50', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-51', 'SC002', '', '51', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-52', 'SC002', '', '52', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-53', 'SC002', '', '53', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-54', 'SC002', '', '54', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-55', 'SC002', '', '55', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-56', 'SC002', '', '56', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-57', 'SC002', '', '57', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-58', 'SC002', '', '58', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-59', 'SC002', '', '59', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-60', 'SC002', '', '60', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-61', 'SC002', '', '61', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-62', 'SC002', '', '62', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-63', 'SC002', '', '63', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-64', 'SC002', '', '64', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-65', 'SC002', '', '65', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-66', 'SC002', '', '66', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-67', 'SC002', '', '67', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-68', 'SC002', '', '68', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-69', 'SC002', '', '69', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-70', 'SC002', '', '70', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-71', 'SC002', '', '71', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-02-72', 'SC002', '', '72', '02', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-01', 'SC002', '', '01', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-02', 'SC002', '', '02', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-03', 'SC002', '', '03', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-04', 'SC002', '', '04', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-05', 'SC002', '', '05', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-06', 'SC002', '', '06', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-07', 'SC002', '', '07', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-08', 'SC002', '', '08', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-09', 'SC002', '', '09', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-10', 'SC002', '', '10', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-11', 'SC002', '', '11', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-12', 'SC002', '', '12', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-13', 'SC002', '', '13', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-14', 'SC002', '', '14', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-15', 'SC002', '', '15', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-16', 'SC002', '', '16', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-17', 'SC002', '', '17', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-18', 'SC002', '', '18', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-19', 'SC002', '', '19', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-20', 'SC002', '', '20', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-21', 'SC002', '', '21', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-22', 'SC002', '', '22', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-23', 'SC002', '', '23', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-24', 'SC002', '', '24', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-25', 'SC002', '', '25', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-26', 'SC002', '', '26', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-27', 'SC002', '', '27', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-28', 'SC002', '', '28', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-29', 'SC002', '', '29', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-30', 'SC002', '', '30', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-31', 'SC002', '', '31', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-32', 'SC002', '', '32', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-33', 'SC002', '', '33', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-34', 'SC002', '', '34', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-35', 'SC002', '', '35', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-36', 'SC002', '', '36', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-37', 'SC002', '', '37', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-38', 'SC002', '', '38', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-39', 'SC002', '', '39', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-40', 'SC002', '', '40', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-41', 'SC002', '', '41', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-42', 'SC002', '', '42', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-43', 'SC002', '', '43', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-44', 'SC002', '', '44', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-45', 'SC002', '', '45', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-46', 'SC002', '', '46', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-47', 'SC002', '', '47', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-48', 'SC002', '', '48', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-49', 'SC002', '', '49', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-50', 'SC002', '', '50', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-51', 'SC002', '', '51', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-52', 'SC002', '', '52', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-53', 'SC002', '', '53', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-54', 'SC002', '', '54', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-55', 'SC002', '', '55', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-56', 'SC002', '', '56', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-57', 'SC002', '', '57', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-58', 'SC002', '', '58', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-59', 'SC002', '', '59', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-60', 'SC002', '', '60', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-61', 'SC002', '', '61', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-62', 'SC002', '', '62', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-63', 'SC002', '', '63', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-64', 'SC002', '', '64', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-65', 'SC002', '', '65', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-66', 'SC002', '', '66', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-67', 'SC002', '', '67', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-68', 'SC002', '', '68', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-69', 'SC002', '', '69', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-70', 'SC002', '', '70', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-71', 'SC002', '', '71', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-03-72', 'SC002', '', '72', '03', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-01', 'SC002', '', '01', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-02', 'SC002', '', '02', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-03', 'SC002', '', '03', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-04', 'SC002', '', '04', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-05', 'SC002', '', '05', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-06', 'SC002', '', '06', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-07', 'SC002', '', '07', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-08', 'SC002', '', '08', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-09', 'SC002', '', '09', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-10', 'SC002', '', '10', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-11', 'SC002', '', '11', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-12', 'SC002', '', '12', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-13', 'SC002', '', '13', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-14', 'SC002', '', '14', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-15', 'SC002', '', '15', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-16', 'SC002', '', '16', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-17', 'SC002', '', '17', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-18', 'SC002', '', '18', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-19', 'SC002', '', '19', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-20', 'SC002', '', '20', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-21', 'SC002', '', '21', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-22', 'SC002', '', '22', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-23', 'SC002', '', '23', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-24', 'SC002', '', '24', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-25', 'SC002', '', '25', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-26', 'SC002', '', '26', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-27', 'SC002', '', '27', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-28', 'SC002', '', '28', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-29', 'SC002', '', '29', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-30', 'SC002', '', '30', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-31', 'SC002', '', '31', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-32', 'SC002', '', '32', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-33', 'SC002', '', '33', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-34', 'SC002', '', '34', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-35', 'SC002', '', '35', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-36', 'SC002', '', '36', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-37', 'SC002', '', '37', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-38', 'SC002', '', '38', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-39', 'SC002', '', '39', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-40', 'SC002', '', '40', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-41', 'SC002', '', '41', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-42', 'SC002', '', '42', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-43', 'SC002', '', '43', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-44', 'SC002', '', '44', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-45', 'SC002', '', '45', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-46', 'SC002', '', '46', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-47', 'SC002', '', '47', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-48', 'SC002', '', '48', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-49', 'SC002', '', '49', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-50', 'SC002', '', '50', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-51', 'SC002', '', '51', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-52', 'SC002', '', '52', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-53', 'SC002', '', '53', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-54', 'SC002', '', '54', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-55', 'SC002', '', '55', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-56', 'SC002', '', '56', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-57', 'SC002', '', '57', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-58', 'SC002', '', '58', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-59', 'SC002', '', '59', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-60', 'SC002', '', '60', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-61', 'SC002', '', '61', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-62', 'SC002', '', '62', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-63', 'SC002', '', '63', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-64', 'SC002', '', '64', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-65', 'SC002', '', '65', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-66', 'SC002', '', '66', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-67', 'SC002', '', '67', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-68', 'SC002', '', '68', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-69', 'SC002', '', '69', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-70', 'SC002', '', '70', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-71', 'SC002', '', '71', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-04-72', 'SC002', '', '72', '04', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-01', 'SC002', '', '01', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-02', 'SC002', '', '02', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-03', 'SC002', '', '03', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-04', 'SC002', '', '04', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-05', 'SC002', '', '05', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-06', 'SC002', '', '06', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-07', 'SC002', '', '07', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-08', 'SC002', '', '08', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-09', 'SC002', '', '09', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-10', 'SC002', '', '10', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-11', 'SC002', '', '11', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-12', 'SC002', '', '12', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-13', 'SC002', '', '13', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-14', 'SC002', '', '14', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-15', 'SC002', '', '15', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-16', 'SC002', '', '16', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-17', 'SC002', '', '17', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-18', 'SC002', '', '18', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-19', 'SC002', '', '19', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-20', 'SC002', '', '20', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-21', 'SC002', '', '21', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-22', 'SC002', '', '22', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-23', 'SC002', '', '23', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-24', 'SC002', '', '24', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-25', 'SC002', '', '25', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-26', 'SC002', '', '26', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-27', 'SC002', '', '27', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-28', 'SC002', '', '28', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-29', 'SC002', '', '29', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-30', 'SC002', '', '30', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-31', 'SC002', '', '31', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-32', 'SC002', '', '32', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-33', 'SC002', '', '33', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-34', 'SC002', '', '34', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-35', 'SC002', '', '35', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-36', 'SC002', '', '36', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-37', 'SC002', '', '37', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-38', 'SC002', '', '38', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-39', 'SC002', '', '39', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-40', 'SC002', '', '40', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-41', 'SC002', '', '41', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-42', 'SC002', '', '42', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-43', 'SC002', '', '43', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-44', 'SC002', '', '44', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-45', 'SC002', '', '45', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-46', 'SC002', '', '46', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-47', 'SC002', '', '47', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-48', 'SC002', '', '48', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-49', 'SC002', '', '49', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-50', 'SC002', '', '50', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-51', 'SC002', '', '51', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-52', 'SC002', '', '52', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-53', 'SC002', '', '53', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-54', 'SC002', '', '54', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-55', 'SC002', '', '55', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-56', 'SC002', '', '56', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-57', 'SC002', '', '57', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-58', 'SC002', '', '58', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-59', 'SC002', '', '59', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-60', 'SC002', '', '60', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-61', 'SC002', '', '61', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-62', 'SC002', '', '62', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-63', 'SC002', '', '63', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-64', 'SC002', '', '64', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-65', 'SC002', '', '65', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-66', 'SC002', '', '66', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-67', 'SC002', '', '67', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-68', 'SC002', '', '68', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-69', 'SC002', '', '69', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-70', 'SC002', '', '70', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-71', 'SC002', '', '71', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-05-72', 'SC002', '', '72', '05', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-01', 'SC002', '', '01', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-02', 'SC002', '', '02', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-03', 'SC002', '', '03', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-04', 'SC002', '', '04', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-05', 'SC002', '', '05', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-06', 'SC002', '', '06', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-07', 'SC002', '', '07', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-08', 'SC002', '', '08', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-09', 'SC002', '', '09', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-10', 'SC002', '', '10', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-11', 'SC002', '', '11', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-12', 'SC002', '', '12', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-13', 'SC002', '', '13', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-14', 'SC002', '', '14', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-15', 'SC002', '', '15', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-16', 'SC002', '', '16', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-17', 'SC002', '', '17', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-18', 'SC002', '', '18', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-19', 'SC002', '', '19', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-20', 'SC002', '', '20', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-21', 'SC002', '', '21', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-22', 'SC002', '', '22', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-23', 'SC002', '', '23', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-24', 'SC002', '', '24', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-25', 'SC002', '', '25', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-26', 'SC002', '', '26', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-27', 'SC002', '', '27', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-28', 'SC002', '', '28', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-29', 'SC002', '', '29', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-30', 'SC002', '', '30', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-31', 'SC002', '', '31', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-32', 'SC002', '', '32', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-33', 'SC002', '', '33', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-34', 'SC002', '', '34', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-35', 'SC002', '', '35', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-36', 'SC002', '', '36', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-37', 'SC002', '', '37', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-38', 'SC002', '', '38', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-39', 'SC002', '', '39', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-40', 'SC002', '', '40', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-41', 'SC002', '', '41', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-42', 'SC002', '', '42', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-43', 'SC002', '', '43', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-44', 'SC002', '', '44', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-45', 'SC002', '', '45', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-46', 'SC002', '', '46', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-47', 'SC002', '', '47', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-48', 'SC002', '', '48', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-49', 'SC002', '', '49', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-50', 'SC002', '', '50', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-51', 'SC002', '', '51', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-52', 'SC002', '', '52', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-53', 'SC002', '', '53', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-54', 'SC002', '', '54', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-55', 'SC002', '', '55', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-56', 'SC002', '', '56', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-57', 'SC002', '', '57', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-58', 'SC002', '', '58', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-59', 'SC002', '', '59', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-60', 'SC002', '', '60', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-61', 'SC002', '', '61', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-62', 'SC002', '', '62', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-63', 'SC002', '', '63', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-64', 'SC002', '', '64', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-65', 'SC002', '', '65', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-66', 'SC002', '', '66', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-67', 'SC002', '', '67', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-68', 'SC002', '', '68', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-69', 'SC002', '', '69', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-70', 'SC002', '', '70', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-71', 'SC002', '', '71', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-06-72', 'SC002', '', '72', '06', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-01', 'SC002', '', '01', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-02', 'SC002', '', '02', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-03', 'SC002', '', '03', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-04', 'SC002', '', '04', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-05', 'SC002', '', '05', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-06', 'SC002', '', '06', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-07', 'SC002', '', '07', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-08', 'SC002', '', '08', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-09', 'SC002', '', '09', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-10', 'SC002', '', '10', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-11', 'SC002', '', '11', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-12', 'SC002', '', '12', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-13', 'SC002', '', '13', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-14', 'SC002', '', '14', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-15', 'SC002', '', '15', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-16', 'SC002', '', '16', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-17', 'SC002', '', '17', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-18', 'SC002', '', '18', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-19', 'SC002', '', '19', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-20', 'SC002', '', '20', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-21', 'SC002', '', '21', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-22', 'SC002', '', '22', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-23', 'SC002', '', '23', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-24', 'SC002', '', '24', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-25', 'SC002', '', '25', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-26', 'SC002', '', '26', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-27', 'SC002', '', '27', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-28', 'SC002', '', '28', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-29', 'SC002', '', '29', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-30', 'SC002', '', '30', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-31', 'SC002', '', '31', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-32', 'SC002', '', '32', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-33', 'SC002', '', '33', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-34', 'SC002', '', '34', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-35', 'SC002', '', '35', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-36', 'SC002', '', '36', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-37', 'SC002', '', '37', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-38', 'SC002', '', '38', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-39', 'SC002', '', '39', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-40', 'SC002', '', '40', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-41', 'SC002', '', '41', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-42', 'SC002', '', '42', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-43', 'SC002', '', '43', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-44', 'SC002', '', '44', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-45', 'SC002', '', '45', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-46', 'SC002', '', '46', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-47', 'SC002', '', '47', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-48', 'SC002', '', '48', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-49', 'SC002', '', '49', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-50', 'SC002', '', '50', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-51', 'SC002', '', '51', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-52', 'SC002', '', '52', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-53', 'SC002', '', '53', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-54', 'SC002', '', '54', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-55', 'SC002', '', '55', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-56', 'SC002', '', '56', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-57', 'SC002', '', '57', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-58', 'SC002', '', '58', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-59', 'SC002', '', '59', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-60', 'SC002', '', '60', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-61', 'SC002', '', '61', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-62', 'SC002', '', '62', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-63', 'SC002', '', '63', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-64', 'SC002', '', '64', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-65', 'SC002', '', '65', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-66', 'SC002', '', '66', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-67', 'SC002', '', '67', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-68', 'SC002', '', '68', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-69', 'SC002', '', '69', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-70', 'SC002', '', '70', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-71', 'SC002', '', '71', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-07-72', 'SC002', '', '72', '07', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-01', 'SC002', '', '01', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-02', 'SC002', '', '02', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-03', 'SC002', '', '03', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-04', 'SC002', '', '04', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-05', 'SC002', '', '05', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-06', 'SC002', '', '06', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-07', 'SC002', '', '07', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-08', 'SC002', '', '08', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-09', 'SC002', '', '09', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-10', 'SC002', '', '10', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-11', 'SC002', '', '11', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-12', 'SC002', '', '12', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-13', 'SC002', '', '13', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-14', 'SC002', '', '14', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-15', 'SC002', '', '15', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-16', 'SC002', '', '16', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-17', 'SC002', '', '17', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-18', 'SC002', '', '18', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-19', 'SC002', '', '19', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-20', 'SC002', '', '20', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-21', 'SC002', '', '21', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-22', 'SC002', '', '22', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-23', 'SC002', '', '23', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-24', 'SC002', '', '24', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-25', 'SC002', '', '25', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-26', 'SC002', '', '26', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-27', 'SC002', '', '27', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-28', 'SC002', '', '28', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-29', 'SC002', '', '29', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-30', 'SC002', '', '30', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-31', 'SC002', '', '31', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-32', 'SC002', '', '32', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-33', 'SC002', '', '33', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-34', 'SC002', '', '34', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-35', 'SC002', '', '35', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-36', 'SC002', '', '36', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-37', 'SC002', '', '37', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-38', 'SC002', '', '38', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-39', 'SC002', '', '39', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-40', 'SC002', '', '40', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-41', 'SC002', '', '41', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-42', 'SC002', '', '42', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-43', 'SC002', '', '43', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-44', 'SC002', '', '44', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-45', 'SC002', '', '45', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-46', 'SC002', '', '46', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-47', 'SC002', '', '47', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-48', 'SC002', '', '48', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-49', 'SC002', '', '49', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-50', 'SC002', '', '50', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-51', 'SC002', '', '51', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-52', 'SC002', '', '52', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-53', 'SC002', '', '53', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-54', 'SC002', '', '54', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-55', 'SC002', '', '55', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-56', 'SC002', '', '56', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-57', 'SC002', '', '57', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-58', 'SC002', '', '58', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-59', 'SC002', '', '59', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-60', 'SC002', '', '60', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-61', 'SC002', '', '61', '08', '0', '0', '', '20', '20', '20', 0, '', '');
INSERT INTO `tb_stock_layout` (`stock_layout_code`, `stock_code`, `stock_type`, `stock_x`, `stock_y`, `stock_z`, `stock_use`, `stock_status`, `width`, `length`, `height`, `stock_layout_qty`, `product_code`, `stock_date`) VALUES
('SC002-08-62', 'SC002', '', '62', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-63', 'SC002', '', '63', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-64', 'SC002', '', '64', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-65', 'SC002', '', '65', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-66', 'SC002', '', '66', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-67', 'SC002', '', '67', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-68', 'SC002', '', '68', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-69', 'SC002', '', '69', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-70', 'SC002', '', '70', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-71', 'SC002', '', '71', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-08-72', 'SC002', '', '72', '08', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-01', 'SC002', '', '01', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-02', 'SC002', '', '02', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-03', 'SC002', '', '03', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-04', 'SC002', '', '04', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-05', 'SC002', '', '05', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-06', 'SC002', '', '06', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-07', 'SC002', '', '07', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-08', 'SC002', '', '08', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-09', 'SC002', '', '09', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-10', 'SC002', '', '10', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-11', 'SC002', '', '11', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-12', 'SC002', '', '12', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-13', 'SC002', '', '13', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-14', 'SC002', '', '14', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-15', 'SC002', '', '15', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-16', 'SC002', '', '16', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-17', 'SC002', '', '17', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-18', 'SC002', '', '18', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-19', 'SC002', '', '19', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-20', 'SC002', '', '20', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-21', 'SC002', '', '21', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-22', 'SC002', '', '22', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-23', 'SC002', '', '23', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-24', 'SC002', '', '24', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-25', 'SC002', '', '25', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-26', 'SC002', '', '26', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-27', 'SC002', '', '27', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-28', 'SC002', '', '28', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-29', 'SC002', '', '29', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-30', 'SC002', '', '30', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-31', 'SC002', '', '31', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-32', 'SC002', '', '32', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-33', 'SC002', '', '33', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-34', 'SC002', '', '34', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-35', 'SC002', '', '35', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-36', 'SC002', '', '36', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-37', 'SC002', '', '37', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-38', 'SC002', '', '38', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-39', 'SC002', '', '39', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-40', 'SC002', '', '40', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-41', 'SC002', '', '41', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-42', 'SC002', '', '42', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-43', 'SC002', '', '43', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-44', 'SC002', '', '44', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-45', 'SC002', '', '45', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-46', 'SC002', '', '46', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-47', 'SC002', '', '47', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-48', 'SC002', '', '48', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-49', 'SC002', '', '49', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-50', 'SC002', '', '50', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-51', 'SC002', '', '51', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-52', 'SC002', '', '52', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-53', 'SC002', '', '53', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-54', 'SC002', '', '54', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-55', 'SC002', '', '55', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-56', 'SC002', '', '56', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-57', 'SC002', '', '57', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-58', 'SC002', '', '58', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-59', 'SC002', '', '59', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-60', 'SC002', '', '60', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-61', 'SC002', '', '61', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-62', 'SC002', '', '62', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-63', 'SC002', '', '63', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-64', 'SC002', '', '64', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-65', 'SC002', '', '65', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-66', 'SC002', '', '66', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-67', 'SC002', '', '67', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-68', 'SC002', '', '68', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-69', 'SC002', '', '69', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-70', 'SC002', '', '70', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-71', 'SC002', '', '71', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-09-72', 'SC002', '', '72', '09', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-01', 'SC002', '', '01', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-02', 'SC002', '', '02', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-03', 'SC002', '', '03', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-04', 'SC002', '', '04', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-05', 'SC002', '', '05', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-06', 'SC002', '', '06', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-07', 'SC002', '', '07', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-08', 'SC002', '', '08', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-09', 'SC002', '', '09', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-10', 'SC002', '', '10', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-11', 'SC002', '', '11', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-12', 'SC002', '', '12', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-13', 'SC002', '', '13', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-14', 'SC002', '', '14', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-15', 'SC002', '', '15', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-16', 'SC002', '', '16', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-17', 'SC002', '', '17', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-18', 'SC002', '', '18', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-19', 'SC002', '', '19', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-20', 'SC002', '', '20', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-21', 'SC002', '', '21', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-22', 'SC002', '', '22', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-23', 'SC002', '', '23', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-24', 'SC002', '', '24', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-25', 'SC002', '', '25', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-26', 'SC002', '', '26', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-27', 'SC002', '', '27', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-28', 'SC002', '', '28', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-29', 'SC002', '', '29', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-30', 'SC002', '', '30', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-31', 'SC002', '', '31', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-32', 'SC002', '', '32', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-33', 'SC002', '', '33', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-34', 'SC002', '', '34', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-35', 'SC002', '', '35', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-36', 'SC002', '', '36', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-37', 'SC002', '', '37', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-38', 'SC002', '', '38', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-39', 'SC002', '', '39', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-40', 'SC002', '', '40', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-41', 'SC002', '', '41', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-42', 'SC002', '', '42', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-43', 'SC002', '', '43', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-44', 'SC002', '', '44', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-45', 'SC002', '', '45', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-46', 'SC002', '', '46', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-47', 'SC002', '', '47', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-48', 'SC002', '', '48', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-49', 'SC002', '', '49', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-50', 'SC002', '', '50', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-51', 'SC002', '', '51', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-52', 'SC002', '', '52', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-53', 'SC002', '', '53', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-54', 'SC002', '', '54', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-55', 'SC002', '', '55', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-56', 'SC002', '', '56', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-57', 'SC002', '', '57', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-58', 'SC002', '', '58', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-59', 'SC002', '', '59', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-60', 'SC002', '', '60', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-61', 'SC002', '', '61', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-62', 'SC002', '', '62', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-63', 'SC002', '', '63', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-64', 'SC002', '', '64', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-65', 'SC002', '', '65', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-66', 'SC002', '', '66', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-67', 'SC002', '', '67', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-68', 'SC002', '', '68', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-69', 'SC002', '', '69', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-70', 'SC002', '', '70', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-71', 'SC002', '', '71', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-10-72', 'SC002', '', '72', '10', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-01', 'SC002', '', '01', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-02', 'SC002', '', '02', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-03', 'SC002', '', '03', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-04', 'SC002', '', '04', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-05', 'SC002', '', '05', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-06', 'SC002', '', '06', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-07', 'SC002', '', '07', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-08', 'SC002', '', '08', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-09', 'SC002', '', '09', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-10', 'SC002', '', '10', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-11', 'SC002', '', '11', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-12', 'SC002', '', '12', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-13', 'SC002', '', '13', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-14', 'SC002', '', '14', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-15', 'SC002', '', '15', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-16', 'SC002', '', '16', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-17', 'SC002', '', '17', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-18', 'SC002', '', '18', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-19', 'SC002', '', '19', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-20', 'SC002', '', '20', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-21', 'SC002', '', '21', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-22', 'SC002', '', '22', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-23', 'SC002', '', '23', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-24', 'SC002', '', '24', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-25', 'SC002', '', '25', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-26', 'SC002', '', '26', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-27', 'SC002', '', '27', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-28', 'SC002', '', '28', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-29', 'SC002', '', '29', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-30', 'SC002', '', '30', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-31', 'SC002', '', '31', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-32', 'SC002', '', '32', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-33', 'SC002', '', '33', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-34', 'SC002', '', '34', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-35', 'SC002', '', '35', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-36', 'SC002', '', '36', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-37', 'SC002', '', '37', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-38', 'SC002', '', '38', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-39', 'SC002', '', '39', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-40', 'SC002', '', '40', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-41', 'SC002', '', '41', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-42', 'SC002', '', '42', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-43', 'SC002', '', '43', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-44', 'SC002', '', '44', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-45', 'SC002', '', '45', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-46', 'SC002', '', '46', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-47', 'SC002', '', '47', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-48', 'SC002', '', '48', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-49', 'SC002', '', '49', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-50', 'SC002', '', '50', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-51', 'SC002', '', '51', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-52', 'SC002', '', '52', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-53', 'SC002', '', '53', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-54', 'SC002', '', '54', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-55', 'SC002', '', '55', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-56', 'SC002', '', '56', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-57', 'SC002', '', '57', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-58', 'SC002', '', '58', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-59', 'SC002', '', '59', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-60', 'SC002', '', '60', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-61', 'SC002', '', '61', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-62', 'SC002', '', '62', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-63', 'SC002', '', '63', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-64', 'SC002', '', '64', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-65', 'SC002', '', '65', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-66', 'SC002', '', '66', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-67', 'SC002', '', '67', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-68', 'SC002', '', '68', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-69', 'SC002', '', '69', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-70', 'SC002', '', '70', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-71', 'SC002', '', '71', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-11-72', 'SC002', '', '72', '11', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-01', 'SC002', '', '01', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-02', 'SC002', '', '02', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-03', 'SC002', '', '03', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-04', 'SC002', '', '04', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-05', 'SC002', '', '05', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-06', 'SC002', '', '06', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-07', 'SC002', '', '07', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-08', 'SC002', '', '08', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-09', 'SC002', '', '09', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-10', 'SC002', '', '10', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-11', 'SC002', '', '11', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-12', 'SC002', '', '12', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-13', 'SC002', '', '13', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-14', 'SC002', '', '14', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-15', 'SC002', '', '15', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-16', 'SC002', '', '16', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-17', 'SC002', '', '17', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-18', 'SC002', '', '18', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-19', 'SC002', '', '19', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-20', 'SC002', '', '20', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-21', 'SC002', '', '21', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-22', 'SC002', '', '22', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-23', 'SC002', '', '23', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-24', 'SC002', '', '24', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-25', 'SC002', '', '25', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-26', 'SC002', '', '26', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-27', 'SC002', '', '27', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-28', 'SC002', '', '28', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-29', 'SC002', '', '29', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-30', 'SC002', '', '30', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-31', 'SC002', '', '31', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-32', 'SC002', '', '32', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-33', 'SC002', '', '33', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-34', 'SC002', '', '34', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-35', 'SC002', '', '35', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-36', 'SC002', '', '36', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-37', 'SC002', '', '37', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-38', 'SC002', '', '38', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-39', 'SC002', '', '39', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-40', 'SC002', '', '40', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-41', 'SC002', '', '41', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-42', 'SC002', '', '42', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-43', 'SC002', '', '43', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-44', 'SC002', '', '44', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-45', 'SC002', '', '45', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-46', 'SC002', '', '46', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-47', 'SC002', '', '47', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-48', 'SC002', '', '48', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-49', 'SC002', '', '49', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-50', 'SC002', '', '50', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-51', 'SC002', '', '51', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-52', 'SC002', '', '52', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-53', 'SC002', '', '53', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-54', 'SC002', '', '54', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-55', 'SC002', '', '55', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-56', 'SC002', '', '56', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-57', 'SC002', '', '57', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-58', 'SC002', '', '58', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-59', 'SC002', '', '59', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-60', 'SC002', '', '60', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-61', 'SC002', '', '61', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-62', 'SC002', '', '62', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-63', 'SC002', '', '63', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-64', 'SC002', '', '64', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-65', 'SC002', '', '65', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-66', 'SC002', '', '66', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-67', 'SC002', '', '67', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-68', 'SC002', '', '68', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-69', 'SC002', '', '69', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-70', 'SC002', '', '70', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-71', 'SC002', '', '71', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-12-72', 'SC002', '', '72', '12', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-01', 'SC002', '', '01', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-02', 'SC002', '', '02', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-03', 'SC002', '', '03', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-04', 'SC002', '', '04', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-05', 'SC002', '', '05', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-06', 'SC002', '', '06', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-07', 'SC002', '', '07', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-08', 'SC002', '', '08', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-09', 'SC002', '', '09', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-10', 'SC002', '', '10', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-11', 'SC002', '', '11', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-12', 'SC002', '', '12', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-13', 'SC002', '', '13', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-14', 'SC002', '', '14', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-15', 'SC002', '', '15', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-16', 'SC002', '', '16', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-17', 'SC002', '', '17', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-18', 'SC002', '', '18', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-19', 'SC002', '', '19', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-20', 'SC002', '', '20', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-21', 'SC002', '', '21', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-22', 'SC002', '', '22', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-23', 'SC002', '', '23', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-24', 'SC002', '', '24', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-25', 'SC002', '', '25', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-26', 'SC002', '', '26', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-27', 'SC002', '', '27', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-28', 'SC002', '', '28', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-29', 'SC002', '', '29', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-30', 'SC002', '', '30', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-31', 'SC002', '', '31', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-32', 'SC002', '', '32', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-33', 'SC002', '', '33', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-34', 'SC002', '', '34', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-35', 'SC002', '', '35', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-36', 'SC002', '', '36', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-37', 'SC002', '', '37', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-38', 'SC002', '', '38', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-39', 'SC002', '', '39', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-40', 'SC002', '', '40', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-41', 'SC002', '', '41', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-42', 'SC002', '', '42', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-43', 'SC002', '', '43', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-44', 'SC002', '', '44', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-45', 'SC002', '', '45', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-46', 'SC002', '', '46', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-47', 'SC002', '', '47', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-48', 'SC002', '', '48', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-49', 'SC002', '', '49', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-50', 'SC002', '', '50', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-51', 'SC002', '', '51', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-52', 'SC002', '', '52', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-53', 'SC002', '', '53', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-54', 'SC002', '', '54', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-55', 'SC002', '', '55', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-56', 'SC002', '', '56', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-57', 'SC002', '', '57', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-58', 'SC002', '', '58', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-59', 'SC002', '', '59', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-60', 'SC002', '', '60', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-61', 'SC002', '', '61', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-62', 'SC002', '', '62', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-63', 'SC002', '', '63', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-64', 'SC002', '', '64', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-65', 'SC002', '', '65', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-66', 'SC002', '', '66', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-67', 'SC002', '', '67', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-68', 'SC002', '', '68', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-69', 'SC002', '', '69', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-70', 'SC002', '', '70', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-71', 'SC002', '', '71', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-13-72', 'SC002', '', '72', '13', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-01', 'SC002', '', '01', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-02', 'SC002', '', '02', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-03', 'SC002', '', '03', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-04', 'SC002', '', '04', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-05', 'SC002', '', '05', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-06', 'SC002', '', '06', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-07', 'SC002', '', '07', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-08', 'SC002', '', '08', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-09', 'SC002', '', '09', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-10', 'SC002', '', '10', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-11', 'SC002', '', '11', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-12', 'SC002', '', '12', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-13', 'SC002', '', '13', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-14', 'SC002', '', '14', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-15', 'SC002', '', '15', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-16', 'SC002', '', '16', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-17', 'SC002', '', '17', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-18', 'SC002', '', '18', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-19', 'SC002', '', '19', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-20', 'SC002', '', '20', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-21', 'SC002', '', '21', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-22', 'SC002', '', '22', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-23', 'SC002', '', '23', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-24', 'SC002', '', '24', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-25', 'SC002', '', '25', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-26', 'SC002', '', '26', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-27', 'SC002', '', '27', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-28', 'SC002', '', '28', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-29', 'SC002', '', '29', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-30', 'SC002', '', '30', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-31', 'SC002', '', '31', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-32', 'SC002', '', '32', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-33', 'SC002', '', '33', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-34', 'SC002', '', '34', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-35', 'SC002', '', '35', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-36', 'SC002', '', '36', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-37', 'SC002', '', '37', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-38', 'SC002', '', '38', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-39', 'SC002', '', '39', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-40', 'SC002', '', '40', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-41', 'SC002', '', '41', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-42', 'SC002', '', '42', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-43', 'SC002', '', '43', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-44', 'SC002', '', '44', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-45', 'SC002', '', '45', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-46', 'SC002', '', '46', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-47', 'SC002', '', '47', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-48', 'SC002', '', '48', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-49', 'SC002', '', '49', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-50', 'SC002', '', '50', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-51', 'SC002', '', '51', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-52', 'SC002', '', '52', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-53', 'SC002', '', '53', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-54', 'SC002', '', '54', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-55', 'SC002', '', '55', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-56', 'SC002', '', '56', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-57', 'SC002', '', '57', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-58', 'SC002', '', '58', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-59', 'SC002', '', '59', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-60', 'SC002', '', '60', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-61', 'SC002', '', '61', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-62', 'SC002', '', '62', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-63', 'SC002', '', '63', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-64', 'SC002', '', '64', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-65', 'SC002', '', '65', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-66', 'SC002', '', '66', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-67', 'SC002', '', '67', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-68', 'SC002', '', '68', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-69', 'SC002', '', '69', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-70', 'SC002', '', '70', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-71', 'SC002', '', '71', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-14-72', 'SC002', '', '72', '14', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-01', 'SC002', '', '01', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-02', 'SC002', '', '02', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-03', 'SC002', '', '03', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-04', 'SC002', '', '04', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-05', 'SC002', '', '05', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-06', 'SC002', '', '06', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-07', 'SC002', '', '07', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-08', 'SC002', '', '08', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-09', 'SC002', '', '09', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-10', 'SC002', '', '10', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-11', 'SC002', '', '11', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-12', 'SC002', '', '12', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-13', 'SC002', '', '13', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-14', 'SC002', '', '14', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-15', 'SC002', '', '15', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-16', 'SC002', '', '16', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-17', 'SC002', '', '17', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-18', 'SC002', '', '18', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-19', 'SC002', '', '19', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-20', 'SC002', '', '20', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-21', 'SC002', '', '21', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-22', 'SC002', '', '22', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-23', 'SC002', '', '23', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-24', 'SC002', '', '24', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-25', 'SC002', '', '25', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-26', 'SC002', '', '26', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-27', 'SC002', '', '27', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-28', 'SC002', '', '28', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-29', 'SC002', '', '29', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-30', 'SC002', '', '30', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-31', 'SC002', '', '31', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-32', 'SC002', '', '32', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-33', 'SC002', '', '33', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-34', 'SC002', '', '34', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-35', 'SC002', '', '35', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-36', 'SC002', '', '36', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-37', 'SC002', '', '37', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-38', 'SC002', '', '38', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-39', 'SC002', '', '39', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-40', 'SC002', '', '40', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-41', 'SC002', '', '41', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-42', 'SC002', '', '42', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-43', 'SC002', '', '43', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-44', 'SC002', '', '44', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-45', 'SC002', '', '45', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-46', 'SC002', '', '46', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-47', 'SC002', '', '47', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-48', 'SC002', '', '48', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-49', 'SC002', '', '49', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-50', 'SC002', '', '50', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-51', 'SC002', '', '51', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-52', 'SC002', '', '52', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-53', 'SC002', '', '53', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-54', 'SC002', '', '54', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-55', 'SC002', '', '55', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-56', 'SC002', '', '56', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-57', 'SC002', '', '57', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-58', 'SC002', '', '58', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-59', 'SC002', '', '59', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-60', 'SC002', '', '60', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-61', 'SC002', '', '61', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-62', 'SC002', '', '62', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-63', 'SC002', '', '63', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-64', 'SC002', '', '64', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-65', 'SC002', '', '65', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-66', 'SC002', '', '66', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-67', 'SC002', '', '67', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-68', 'SC002', '', '68', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-69', 'SC002', '', '69', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-70', 'SC002', '', '70', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-71', 'SC002', '', '71', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-15-72', 'SC002', '', '72', '15', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-01', 'SC002', '', '01', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-02', 'SC002', '', '02', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-03', 'SC002', '', '03', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-04', 'SC002', '', '04', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-05', 'SC002', '', '05', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-06', 'SC002', '', '06', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-07', 'SC002', '', '07', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-08', 'SC002', '', '08', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-09', 'SC002', '', '09', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-10', 'SC002', '', '10', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-11', 'SC002', '', '11', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-12', 'SC002', '', '12', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-13', 'SC002', '', '13', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-14', 'SC002', '', '14', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-15', 'SC002', '', '15', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-16', 'SC002', '', '16', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-17', 'SC002', '', '17', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-18', 'SC002', '', '18', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-19', 'SC002', '', '19', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-20', 'SC002', '', '20', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-21', 'SC002', '', '21', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-22', 'SC002', '', '22', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-23', 'SC002', '', '23', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-24', 'SC002', '', '24', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-25', 'SC002', '', '25', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-26', 'SC002', '', '26', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-27', 'SC002', '', '27', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-28', 'SC002', '', '28', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-29', 'SC002', '', '29', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-30', 'SC002', '', '30', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-31', 'SC002', '', '31', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-32', 'SC002', '', '32', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-33', 'SC002', '', '33', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-34', 'SC002', '', '34', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-35', 'SC002', '', '35', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-36', 'SC002', '', '36', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-37', 'SC002', '', '37', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-38', 'SC002', '', '38', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-39', 'SC002', '', '39', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-40', 'SC002', '', '40', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-41', 'SC002', '', '41', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-42', 'SC002', '', '42', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-43', 'SC002', '', '43', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-44', 'SC002', '', '44', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-45', 'SC002', '', '45', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-46', 'SC002', '', '46', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-47', 'SC002', '', '47', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-48', 'SC002', '', '48', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-49', 'SC002', '', '49', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-50', 'SC002', '', '50', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-51', 'SC002', '', '51', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-52', 'SC002', '', '52', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-53', 'SC002', '', '53', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-54', 'SC002', '', '54', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-55', 'SC002', '', '55', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-56', 'SC002', '', '56', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-57', 'SC002', '', '57', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-58', 'SC002', '', '58', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-59', 'SC002', '', '59', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-60', 'SC002', '', '60', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-61', 'SC002', '', '61', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-62', 'SC002', '', '62', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-63', 'SC002', '', '63', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-64', 'SC002', '', '64', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-65', 'SC002', '', '65', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-66', 'SC002', '', '66', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-67', 'SC002', '', '67', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-68', 'SC002', '', '68', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-69', 'SC002', '', '69', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-70', 'SC002', '', '70', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-71', 'SC002', '', '71', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-16-72', 'SC002', '', '72', '16', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-01', 'SC002', '', '01', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-02', 'SC002', '', '02', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-03', 'SC002', '', '03', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-04', 'SC002', '', '04', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-05', 'SC002', '', '05', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-06', 'SC002', '', '06', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-07', 'SC002', '', '07', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-08', 'SC002', '', '08', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-09', 'SC002', '', '09', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-10', 'SC002', '', '10', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-11', 'SC002', '', '11', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-12', 'SC002', '', '12', '17', '0', '0', '', '20', '20', '20', 0, '', '');
INSERT INTO `tb_stock_layout` (`stock_layout_code`, `stock_code`, `stock_type`, `stock_x`, `stock_y`, `stock_z`, `stock_use`, `stock_status`, `width`, `length`, `height`, `stock_layout_qty`, `product_code`, `stock_date`) VALUES
('SC002-17-13', 'SC002', '', '13', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-14', 'SC002', '', '14', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-15', 'SC002', '', '15', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-16', 'SC002', '', '16', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-17', 'SC002', '', '17', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-18', 'SC002', '', '18', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-19', 'SC002', '', '19', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-20', 'SC002', '', '20', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-21', 'SC002', '', '21', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-22', 'SC002', '', '22', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-23', 'SC002', '', '23', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-24', 'SC002', '', '24', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-25', 'SC002', '', '25', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-26', 'SC002', '', '26', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-27', 'SC002', '', '27', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-28', 'SC002', '', '28', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-29', 'SC002', '', '29', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-30', 'SC002', '', '30', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-31', 'SC002', '', '31', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-32', 'SC002', '', '32', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-33', 'SC002', '', '33', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-34', 'SC002', '', '34', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-35', 'SC002', '', '35', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-36', 'SC002', '', '36', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-37', 'SC002', '', '37', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-38', 'SC002', '', '38', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-39', 'SC002', '', '39', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-40', 'SC002', '', '40', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-41', 'SC002', '', '41', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-42', 'SC002', '', '42', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-43', 'SC002', '', '43', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-44', 'SC002', '', '44', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-45', 'SC002', '', '45', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-46', 'SC002', '', '46', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-47', 'SC002', '', '47', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-48', 'SC002', '', '48', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-49', 'SC002', '', '49', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-50', 'SC002', '', '50', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-51', 'SC002', '', '51', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-52', 'SC002', '', '52', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-53', 'SC002', '', '53', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-54', 'SC002', '', '54', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-55', 'SC002', '', '55', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-56', 'SC002', '', '56', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-57', 'SC002', '', '57', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-58', 'SC002', '', '58', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-59', 'SC002', '', '59', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-60', 'SC002', '', '60', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-61', 'SC002', '', '61', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-62', 'SC002', '', '62', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-63', 'SC002', '', '63', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-64', 'SC002', '', '64', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-65', 'SC002', '', '65', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-66', 'SC002', '', '66', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-67', 'SC002', '', '67', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-68', 'SC002', '', '68', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-69', 'SC002', '', '69', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-70', 'SC002', '', '70', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-71', 'SC002', '', '71', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-17-72', 'SC002', '', '72', '17', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-01', 'SC002', '', '01', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-02', 'SC002', '', '02', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-03', 'SC002', '', '03', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-04', 'SC002', '', '04', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-05', 'SC002', '', '05', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-06', 'SC002', '', '06', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-07', 'SC002', '', '07', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-08', 'SC002', '', '08', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-09', 'SC002', '', '09', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-10', 'SC002', '', '10', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-11', 'SC002', '', '11', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-12', 'SC002', '', '12', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-13', 'SC002', '', '13', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-14', 'SC002', '', '14', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-15', 'SC002', '', '15', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-16', 'SC002', '', '16', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-17', 'SC002', '', '17', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-18', 'SC002', '', '18', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-19', 'SC002', '', '19', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-20', 'SC002', '', '20', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-21', 'SC002', '', '21', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-22', 'SC002', '', '22', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-23', 'SC002', '', '23', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-24', 'SC002', '', '24', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-25', 'SC002', '', '25', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-26', 'SC002', '', '26', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-27', 'SC002', '', '27', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-28', 'SC002', '', '28', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-29', 'SC002', '', '29', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-30', 'SC002', '', '30', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-31', 'SC002', '', '31', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-32', 'SC002', '', '32', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-33', 'SC002', '', '33', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-34', 'SC002', '', '34', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-35', 'SC002', '', '35', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-36', 'SC002', '', '36', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-37', 'SC002', '', '37', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-38', 'SC002', '', '38', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-39', 'SC002', '', '39', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-40', 'SC002', '', '40', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-41', 'SC002', '', '41', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-42', 'SC002', '', '42', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-43', 'SC002', '', '43', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-44', 'SC002', '', '44', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-45', 'SC002', '', '45', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-46', 'SC002', '', '46', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-47', 'SC002', '', '47', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-48', 'SC002', '', '48', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-49', 'SC002', '', '49', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-50', 'SC002', '', '50', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-51', 'SC002', '', '51', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-52', 'SC002', '', '52', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-53', 'SC002', '', '53', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-54', 'SC002', '', '54', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-55', 'SC002', '', '55', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-56', 'SC002', '', '56', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-57', 'SC002', '', '57', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-58', 'SC002', '', '58', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-59', 'SC002', '', '59', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-60', 'SC002', '', '60', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-61', 'SC002', '', '61', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-62', 'SC002', '', '62', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-63', 'SC002', '', '63', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-64', 'SC002', '', '64', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-65', 'SC002', '', '65', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-66', 'SC002', '', '66', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-67', 'SC002', '', '67', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-68', 'SC002', '', '68', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-69', 'SC002', '', '69', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-70', 'SC002', '', '70', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-71', 'SC002', '', '71', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-18-72', 'SC002', '', '72', '18', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-01', 'SC002', '', '01', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-02', 'SC002', '', '02', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-03', 'SC002', '', '03', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-04', 'SC002', '', '04', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-05', 'SC002', '', '05', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-06', 'SC002', '', '06', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-07', 'SC002', '', '07', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-08', 'SC002', '', '08', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-09', 'SC002', '', '09', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-10', 'SC002', '', '10', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-11', 'SC002', '', '11', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-12', 'SC002', '', '12', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-13', 'SC002', '', '13', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-14', 'SC002', '', '14', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-15', 'SC002', '', '15', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-16', 'SC002', '', '16', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-17', 'SC002', '', '17', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-18', 'SC002', '', '18', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-19', 'SC002', '', '19', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-20', 'SC002', '', '20', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-21', 'SC002', '', '21', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-22', 'SC002', '', '22', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-23', 'SC002', '', '23', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-24', 'SC002', '', '24', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-25', 'SC002', '', '25', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-26', 'SC002', '', '26', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-27', 'SC002', '', '27', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-28', 'SC002', '', '28', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-29', 'SC002', '', '29', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-30', 'SC002', '', '30', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-31', 'SC002', '', '31', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-32', 'SC002', '', '32', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-33', 'SC002', '', '33', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-34', 'SC002', '', '34', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-35', 'SC002', '', '35', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-36', 'SC002', '', '36', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-37', 'SC002', '', '37', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-38', 'SC002', '', '38', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-39', 'SC002', '', '39', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-40', 'SC002', '', '40', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-41', 'SC002', '', '41', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-42', 'SC002', '', '42', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-43', 'SC002', '', '43', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-44', 'SC002', '', '44', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-45', 'SC002', '', '45', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-46', 'SC002', '', '46', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-47', 'SC002', '', '47', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-48', 'SC002', '', '48', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-49', 'SC002', '', '49', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-50', 'SC002', '', '50', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-51', 'SC002', '', '51', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-52', 'SC002', '', '52', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-53', 'SC002', '', '53', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-54', 'SC002', '', '54', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-55', 'SC002', '', '55', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-56', 'SC002', '', '56', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-57', 'SC002', '', '57', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-58', 'SC002', '', '58', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-59', 'SC002', '', '59', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-60', 'SC002', '', '60', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-61', 'SC002', '', '61', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-62', 'SC002', '', '62', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-63', 'SC002', '', '63', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-64', 'SC002', '', '64', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-65', 'SC002', '', '65', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-66', 'SC002', '', '66', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-67', 'SC002', '', '67', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-68', 'SC002', '', '68', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-69', 'SC002', '', '69', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-70', 'SC002', '', '70', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-71', 'SC002', '', '71', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-19-72', 'SC002', '', '72', '19', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-01', 'SC002', '', '01', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-02', 'SC002', '', '02', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-03', 'SC002', '', '03', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-04', 'SC002', '', '04', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-05', 'SC002', '', '05', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-06', 'SC002', '', '06', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-07', 'SC002', '', '07', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-08', 'SC002', '', '08', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-09', 'SC002', '', '09', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-10', 'SC002', '', '10', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-11', 'SC002', '', '11', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-12', 'SC002', '', '12', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-13', 'SC002', '', '13', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-14', 'SC002', '', '14', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-15', 'SC002', '', '15', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-16', 'SC002', '', '16', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-17', 'SC002', '', '17', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-18', 'SC002', '', '18', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-19', 'SC002', '', '19', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-20', 'SC002', '', '20', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-21', 'SC002', '', '21', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-22', 'SC002', '', '22', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-23', 'SC002', '', '23', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-24', 'SC002', '', '24', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-25', 'SC002', '', '25', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-26', 'SC002', '', '26', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-27', 'SC002', '', '27', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-28', 'SC002', '', '28', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-29', 'SC002', '', '29', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-30', 'SC002', '', '30', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-31', 'SC002', '', '31', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-32', 'SC002', '', '32', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-33', 'SC002', '', '33', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-34', 'SC002', '', '34', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-35', 'SC002', '', '35', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-36', 'SC002', '', '36', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-37', 'SC002', '', '37', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-38', 'SC002', '', '38', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-39', 'SC002', '', '39', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-40', 'SC002', '', '40', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-41', 'SC002', '', '41', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-42', 'SC002', '', '42', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-43', 'SC002', '', '43', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-44', 'SC002', '', '44', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-45', 'SC002', '', '45', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-46', 'SC002', '', '46', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-47', 'SC002', '', '47', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-48', 'SC002', '', '48', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-49', 'SC002', '', '49', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-50', 'SC002', '', '50', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-51', 'SC002', '', '51', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-52', 'SC002', '', '52', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-53', 'SC002', '', '53', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-54', 'SC002', '', '54', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-55', 'SC002', '', '55', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-56', 'SC002', '', '56', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-57', 'SC002', '', '57', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-58', 'SC002', '', '58', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-59', 'SC002', '', '59', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-60', 'SC002', '', '60', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-61', 'SC002', '', '61', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-62', 'SC002', '', '62', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-63', 'SC002', '', '63', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-64', 'SC002', '', '64', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-65', 'SC002', '', '65', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-66', 'SC002', '', '66', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-67', 'SC002', '', '67', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-68', 'SC002', '', '68', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-69', 'SC002', '', '69', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-70', 'SC002', '', '70', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-71', 'SC002', '', '71', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-20-72', 'SC002', '', '72', '20', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-01', 'SC002', '', '01', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-02', 'SC002', '', '02', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-03', 'SC002', '', '03', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-04', 'SC002', '', '04', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-05', 'SC002', '', '05', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-06', 'SC002', '', '06', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-07', 'SC002', '', '07', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-08', 'SC002', '', '08', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-09', 'SC002', '', '09', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-10', 'SC002', '', '10', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-11', 'SC002', '', '11', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-12', 'SC002', '', '12', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-13', 'SC002', '', '13', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-14', 'SC002', '', '14', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-15', 'SC002', '', '15', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-16', 'SC002', '', '16', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-17', 'SC002', '', '17', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-18', 'SC002', '', '18', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-19', 'SC002', '', '19', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-20', 'SC002', '', '20', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-21', 'SC002', '', '21', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-22', 'SC002', '', '22', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-23', 'SC002', '', '23', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-24', 'SC002', '', '24', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-25', 'SC002', '', '25', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-26', 'SC002', '', '26', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-27', 'SC002', '', '27', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-28', 'SC002', '', '28', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-29', 'SC002', '', '29', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-30', 'SC002', '', '30', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-31', 'SC002', '', '31', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-32', 'SC002', '', '32', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-33', 'SC002', '', '33', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-34', 'SC002', '', '34', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-35', 'SC002', '', '35', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-36', 'SC002', '', '36', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-37', 'SC002', '', '37', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-38', 'SC002', '', '38', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-39', 'SC002', '', '39', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-40', 'SC002', '', '40', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-41', 'SC002', '', '41', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-42', 'SC002', '', '42', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-43', 'SC002', '', '43', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-44', 'SC002', '', '44', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-45', 'SC002', '', '45', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-46', 'SC002', '', '46', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-47', 'SC002', '', '47', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-48', 'SC002', '', '48', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-49', 'SC002', '', '49', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-50', 'SC002', '', '50', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-51', 'SC002', '', '51', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-52', 'SC002', '', '52', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-53', 'SC002', '', '53', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-54', 'SC002', '', '54', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-55', 'SC002', '', '55', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-56', 'SC002', '', '56', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-57', 'SC002', '', '57', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-58', 'SC002', '', '58', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-59', 'SC002', '', '59', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-60', 'SC002', '', '60', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-61', 'SC002', '', '61', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-62', 'SC002', '', '62', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-63', 'SC002', '', '63', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-64', 'SC002', '', '64', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-65', 'SC002', '', '65', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-66', 'SC002', '', '66', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-67', 'SC002', '', '67', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-68', 'SC002', '', '68', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-69', 'SC002', '', '69', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-70', 'SC002', '', '70', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-71', 'SC002', '', '71', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-21-72', 'SC002', '', '72', '21', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-01', 'SC002', '', '01', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-02', 'SC002', '', '02', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-03', 'SC002', '', '03', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-04', 'SC002', '', '04', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-05', 'SC002', '', '05', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-06', 'SC002', '', '06', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-07', 'SC002', '', '07', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-08', 'SC002', '', '08', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-09', 'SC002', '', '09', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-10', 'SC002', '', '10', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-11', 'SC002', '', '11', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-12', 'SC002', '', '12', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-13', 'SC002', '', '13', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-14', 'SC002', '', '14', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-15', 'SC002', '', '15', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-16', 'SC002', '', '16', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-17', 'SC002', '', '17', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-18', 'SC002', '', '18', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-19', 'SC002', '', '19', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-20', 'SC002', '', '20', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-21', 'SC002', '', '21', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-22', 'SC002', '', '22', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-23', 'SC002', '', '23', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-24', 'SC002', '', '24', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-25', 'SC002', '', '25', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-26', 'SC002', '', '26', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-27', 'SC002', '', '27', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-28', 'SC002', '', '28', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-29', 'SC002', '', '29', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-30', 'SC002', '', '30', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-31', 'SC002', '', '31', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-32', 'SC002', '', '32', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-33', 'SC002', '', '33', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-34', 'SC002', '', '34', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-35', 'SC002', '', '35', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-36', 'SC002', '', '36', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-37', 'SC002', '', '37', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-38', 'SC002', '', '38', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-39', 'SC002', '', '39', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-40', 'SC002', '', '40', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-41', 'SC002', '', '41', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-42', 'SC002', '', '42', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-43', 'SC002', '', '43', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-44', 'SC002', '', '44', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-45', 'SC002', '', '45', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-46', 'SC002', '', '46', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-47', 'SC002', '', '47', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-48', 'SC002', '', '48', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-49', 'SC002', '', '49', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-50', 'SC002', '', '50', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-51', 'SC002', '', '51', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-52', 'SC002', '', '52', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-53', 'SC002', '', '53', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-54', 'SC002', '', '54', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-55', 'SC002', '', '55', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-56', 'SC002', '', '56', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-57', 'SC002', '', '57', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-58', 'SC002', '', '58', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-59', 'SC002', '', '59', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-60', 'SC002', '', '60', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-61', 'SC002', '', '61', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-62', 'SC002', '', '62', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-63', 'SC002', '', '63', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-64', 'SC002', '', '64', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-65', 'SC002', '', '65', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-66', 'SC002', '', '66', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-67', 'SC002', '', '67', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-68', 'SC002', '', '68', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-69', 'SC002', '', '69', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-70', 'SC002', '', '70', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-71', 'SC002', '', '71', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-22-72', 'SC002', '', '72', '22', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-01', 'SC002', '', '01', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-02', 'SC002', '', '02', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-03', 'SC002', '', '03', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-04', 'SC002', '', '04', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-05', 'SC002', '', '05', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-06', 'SC002', '', '06', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-07', 'SC002', '', '07', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-08', 'SC002', '', '08', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-09', 'SC002', '', '09', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-10', 'SC002', '', '10', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-11', 'SC002', '', '11', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-12', 'SC002', '', '12', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-13', 'SC002', '', '13', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-14', 'SC002', '', '14', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-15', 'SC002', '', '15', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-16', 'SC002', '', '16', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-17', 'SC002', '', '17', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-18', 'SC002', '', '18', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-19', 'SC002', '', '19', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-20', 'SC002', '', '20', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-21', 'SC002', '', '21', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-22', 'SC002', '', '22', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-23', 'SC002', '', '23', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-24', 'SC002', '', '24', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-25', 'SC002', '', '25', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-26', 'SC002', '', '26', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-27', 'SC002', '', '27', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-28', 'SC002', '', '28', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-29', 'SC002', '', '29', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-30', 'SC002', '', '30', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-31', 'SC002', '', '31', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-32', 'SC002', '', '32', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-33', 'SC002', '', '33', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-34', 'SC002', '', '34', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-35', 'SC002', '', '35', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-36', 'SC002', '', '36', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-37', 'SC002', '', '37', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-38', 'SC002', '', '38', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-39', 'SC002', '', '39', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-40', 'SC002', '', '40', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-41', 'SC002', '', '41', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-42', 'SC002', '', '42', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-43', 'SC002', '', '43', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-44', 'SC002', '', '44', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-45', 'SC002', '', '45', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-46', 'SC002', '', '46', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-47', 'SC002', '', '47', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-48', 'SC002', '', '48', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-49', 'SC002', '', '49', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-50', 'SC002', '', '50', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-51', 'SC002', '', '51', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-52', 'SC002', '', '52', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-53', 'SC002', '', '53', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-54', 'SC002', '', '54', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-55', 'SC002', '', '55', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-56', 'SC002', '', '56', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-57', 'SC002', '', '57', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-58', 'SC002', '', '58', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-59', 'SC002', '', '59', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-60', 'SC002', '', '60', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-61', 'SC002', '', '61', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-62', 'SC002', '', '62', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-63', 'SC002', '', '63', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-64', 'SC002', '', '64', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-65', 'SC002', '', '65', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-66', 'SC002', '', '66', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-67', 'SC002', '', '67', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-68', 'SC002', '', '68', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-69', 'SC002', '', '69', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-70', 'SC002', '', '70', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-71', 'SC002', '', '71', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-23-72', 'SC002', '', '72', '23', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-01', 'SC002', '', '01', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-02', 'SC002', '', '02', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-03', 'SC002', '', '03', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-04', 'SC002', '', '04', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-05', 'SC002', '', '05', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-06', 'SC002', '', '06', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-07', 'SC002', '', '07', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-08', 'SC002', '', '08', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-09', 'SC002', '', '09', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-10', 'SC002', '', '10', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-11', 'SC002', '', '11', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-12', 'SC002', '', '12', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-13', 'SC002', '', '13', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-14', 'SC002', '', '14', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-15', 'SC002', '', '15', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-16', 'SC002', '', '16', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-17', 'SC002', '', '17', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-18', 'SC002', '', '18', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-19', 'SC002', '', '19', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-20', 'SC002', '', '20', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-21', 'SC002', '', '21', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-22', 'SC002', '', '22', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-23', 'SC002', '', '23', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-24', 'SC002', '', '24', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-25', 'SC002', '', '25', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-26', 'SC002', '', '26', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-27', 'SC002', '', '27', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-28', 'SC002', '', '28', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-29', 'SC002', '', '29', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-30', 'SC002', '', '30', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-31', 'SC002', '', '31', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-32', 'SC002', '', '32', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-33', 'SC002', '', '33', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-34', 'SC002', '', '34', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-35', 'SC002', '', '35', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-36', 'SC002', '', '36', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-37', 'SC002', '', '37', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-38', 'SC002', '', '38', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-39', 'SC002', '', '39', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-40', 'SC002', '', '40', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-41', 'SC002', '', '41', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-42', 'SC002', '', '42', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-43', 'SC002', '', '43', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-44', 'SC002', '', '44', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-45', 'SC002', '', '45', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-46', 'SC002', '', '46', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-47', 'SC002', '', '47', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-48', 'SC002', '', '48', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-49', 'SC002', '', '49', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-50', 'SC002', '', '50', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-51', 'SC002', '', '51', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-52', 'SC002', '', '52', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-53', 'SC002', '', '53', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-54', 'SC002', '', '54', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-55', 'SC002', '', '55', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-56', 'SC002', '', '56', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-57', 'SC002', '', '57', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-58', 'SC002', '', '58', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-59', 'SC002', '', '59', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-60', 'SC002', '', '60', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-61', 'SC002', '', '61', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-62', 'SC002', '', '62', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-63', 'SC002', '', '63', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-64', 'SC002', '', '64', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-65', 'SC002', '', '65', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-66', 'SC002', '', '66', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-67', 'SC002', '', '67', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-68', 'SC002', '', '68', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-69', 'SC002', '', '69', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-70', 'SC002', '', '70', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-71', 'SC002', '', '71', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-24-72', 'SC002', '', '72', '24', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-01', 'SC002', '', '01', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-02', 'SC002', '', '02', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-03', 'SC002', '', '03', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-04', 'SC002', '', '04', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-05', 'SC002', '', '05', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-06', 'SC002', '', '06', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-07', 'SC002', '', '07', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-08', 'SC002', '', '08', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-09', 'SC002', '', '09', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-10', 'SC002', '', '10', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-11', 'SC002', '', '11', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-12', 'SC002', '', '12', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-13', 'SC002', '', '13', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-14', 'SC002', '', '14', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-15', 'SC002', '', '15', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-16', 'SC002', '', '16', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-17', 'SC002', '', '17', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-18', 'SC002', '', '18', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-19', 'SC002', '', '19', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-20', 'SC002', '', '20', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-21', 'SC002', '', '21', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-22', 'SC002', '', '22', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-23', 'SC002', '', '23', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-24', 'SC002', '', '24', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-25', 'SC002', '', '25', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-26', 'SC002', '', '26', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-27', 'SC002', '', '27', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-28', 'SC002', '', '28', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-29', 'SC002', '', '29', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-30', 'SC002', '', '30', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-31', 'SC002', '', '31', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-32', 'SC002', '', '32', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-33', 'SC002', '', '33', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-34', 'SC002', '', '34', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-35', 'SC002', '', '35', '25', '0', '0', '', '20', '20', '20', 0, '', '');
INSERT INTO `tb_stock_layout` (`stock_layout_code`, `stock_code`, `stock_type`, `stock_x`, `stock_y`, `stock_z`, `stock_use`, `stock_status`, `width`, `length`, `height`, `stock_layout_qty`, `product_code`, `stock_date`) VALUES
('SC002-25-36', 'SC002', '', '36', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-37', 'SC002', '', '37', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-38', 'SC002', '', '38', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-39', 'SC002', '', '39', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-40', 'SC002', '', '40', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-41', 'SC002', '', '41', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-42', 'SC002', '', '42', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-43', 'SC002', '', '43', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-44', 'SC002', '', '44', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-45', 'SC002', '', '45', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-46', 'SC002', '', '46', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-47', 'SC002', '', '47', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-48', 'SC002', '', '48', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-49', 'SC002', '', '49', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-50', 'SC002', '', '50', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-51', 'SC002', '', '51', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-52', 'SC002', '', '52', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-53', 'SC002', '', '53', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-54', 'SC002', '', '54', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-55', 'SC002', '', '55', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-56', 'SC002', '', '56', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-57', 'SC002', '', '57', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-58', 'SC002', '', '58', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-59', 'SC002', '', '59', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-60', 'SC002', '', '60', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-61', 'SC002', '', '61', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-62', 'SC002', '', '62', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-63', 'SC002', '', '63', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-64', 'SC002', '', '64', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-65', 'SC002', '', '65', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-66', 'SC002', '', '66', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-67', 'SC002', '', '67', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-68', 'SC002', '', '68', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-69', 'SC002', '', '69', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-70', 'SC002', '', '70', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-71', 'SC002', '', '71', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-25-72', 'SC002', '', '72', '25', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-01', 'SC002', '', '01', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-02', 'SC002', '', '02', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-03', 'SC002', '', '03', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-04', 'SC002', '', '04', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-05', 'SC002', '', '05', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-06', 'SC002', '', '06', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-07', 'SC002', '', '07', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-08', 'SC002', '', '08', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-09', 'SC002', '', '09', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-10', 'SC002', '', '10', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-11', 'SC002', '', '11', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-12', 'SC002', '', '12', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-13', 'SC002', '', '13', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-14', 'SC002', '', '14', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-15', 'SC002', '', '15', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-16', 'SC002', '', '16', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-17', 'SC002', '', '17', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-18', 'SC002', '', '18', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-19', 'SC002', '', '19', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-20', 'SC002', '', '20', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-21', 'SC002', '', '21', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-22', 'SC002', '', '22', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-23', 'SC002', '', '23', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-24', 'SC002', '', '24', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-25', 'SC002', '', '25', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-26', 'SC002', '', '26', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-27', 'SC002', '', '27', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-28', 'SC002', '', '28', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-29', 'SC002', '', '29', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-30', 'SC002', '', '30', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-31', 'SC002', '', '31', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-32', 'SC002', '', '32', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-33', 'SC002', '', '33', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-34', 'SC002', '', '34', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-35', 'SC002', '', '35', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-36', 'SC002', '', '36', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-37', 'SC002', '', '37', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-38', 'SC002', '', '38', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-39', 'SC002', '', '39', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-40', 'SC002', '', '40', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-41', 'SC002', '', '41', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-42', 'SC002', '', '42', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-43', 'SC002', '', '43', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-44', 'SC002', '', '44', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-45', 'SC002', '', '45', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-46', 'SC002', '', '46', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-47', 'SC002', '', '47', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-48', 'SC002', '', '48', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-49', 'SC002', '', '49', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-50', 'SC002', '', '50', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-51', 'SC002', '', '51', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-52', 'SC002', '', '52', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-53', 'SC002', '', '53', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-54', 'SC002', '', '54', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-55', 'SC002', '', '55', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-56', 'SC002', '', '56', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-57', 'SC002', '', '57', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-58', 'SC002', '', '58', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-59', 'SC002', '', '59', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-60', 'SC002', '', '60', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-61', 'SC002', '', '61', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-62', 'SC002', '', '62', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-63', 'SC002', '', '63', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-64', 'SC002', '', '64', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-65', 'SC002', '', '65', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-66', 'SC002', '', '66', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-67', 'SC002', '', '67', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-68', 'SC002', '', '68', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-69', 'SC002', '', '69', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-70', 'SC002', '', '70', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-71', 'SC002', '', '71', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-26-72', 'SC002', '', '72', '26', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-01', 'SC002', '', '01', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-02', 'SC002', '', '02', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-03', 'SC002', '', '03', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-04', 'SC002', '', '04', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-05', 'SC002', '', '05', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-06', 'SC002', '', '06', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-07', 'SC002', '', '07', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-08', 'SC002', '', '08', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-09', 'SC002', '', '09', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-10', 'SC002', '', '10', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-11', 'SC002', '', '11', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-12', 'SC002', '', '12', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-13', 'SC002', '', '13', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-14', 'SC002', '', '14', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-15', 'SC002', '', '15', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-16', 'SC002', '', '16', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-17', 'SC002', '', '17', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-18', 'SC002', '', '18', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-19', 'SC002', '', '19', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-20', 'SC002', '', '20', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-21', 'SC002', '', '21', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-22', 'SC002', '', '22', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-23', 'SC002', '', '23', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-24', 'SC002', '', '24', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-25', 'SC002', '', '25', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-26', 'SC002', '', '26', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-27', 'SC002', '', '27', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-28', 'SC002', '', '28', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-29', 'SC002', '', '29', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-30', 'SC002', '', '30', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-31', 'SC002', '', '31', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-32', 'SC002', '', '32', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-33', 'SC002', '', '33', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-34', 'SC002', '', '34', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-35', 'SC002', '', '35', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-36', 'SC002', '', '36', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-37', 'SC002', '', '37', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-38', 'SC002', '', '38', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-39', 'SC002', '', '39', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-40', 'SC002', '', '40', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-41', 'SC002', '', '41', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-42', 'SC002', '', '42', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-43', 'SC002', '', '43', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-44', 'SC002', '', '44', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-45', 'SC002', '', '45', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-46', 'SC002', '', '46', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-47', 'SC002', '', '47', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-48', 'SC002', '', '48', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-49', 'SC002', '', '49', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-50', 'SC002', '', '50', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-51', 'SC002', '', '51', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-52', 'SC002', '', '52', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-53', 'SC002', '', '53', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-54', 'SC002', '', '54', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-55', 'SC002', '', '55', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-56', 'SC002', '', '56', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-57', 'SC002', '', '57', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-58', 'SC002', '', '58', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-59', 'SC002', '', '59', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-60', 'SC002', '', '60', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-61', 'SC002', '', '61', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-62', 'SC002', '', '62', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-63', 'SC002', '', '63', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-64', 'SC002', '', '64', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-65', 'SC002', '', '65', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-66', 'SC002', '', '66', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-67', 'SC002', '', '67', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-68', 'SC002', '', '68', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-69', 'SC002', '', '69', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-70', 'SC002', '', '70', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-71', 'SC002', '', '71', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-27-72', 'SC002', '', '72', '27', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-01', 'SC002', '', '01', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-02', 'SC002', '', '02', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-03', 'SC002', '', '03', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-04', 'SC002', '', '04', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-05', 'SC002', '', '05', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-06', 'SC002', '', '06', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-07', 'SC002', '', '07', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-08', 'SC002', '', '08', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-09', 'SC002', '', '09', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-10', 'SC002', '', '10', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-11', 'SC002', '', '11', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-12', 'SC002', '', '12', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-13', 'SC002', '', '13', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-14', 'SC002', '', '14', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-15', 'SC002', '', '15', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-16', 'SC002', '', '16', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-17', 'SC002', '', '17', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-18', 'SC002', '', '18', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-19', 'SC002', '', '19', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-20', 'SC002', '', '20', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-21', 'SC002', '', '21', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-22', 'SC002', '', '22', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-23', 'SC002', '', '23', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-24', 'SC002', '', '24', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-25', 'SC002', '', '25', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-26', 'SC002', '', '26', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-27', 'SC002', '', '27', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-28', 'SC002', '', '28', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-29', 'SC002', '', '29', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-30', 'SC002', '', '30', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-31', 'SC002', '', '31', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-32', 'SC002', '', '32', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-33', 'SC002', '', '33', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-34', 'SC002', '', '34', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-35', 'SC002', '', '35', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-36', 'SC002', '', '36', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-37', 'SC002', '', '37', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-38', 'SC002', '', '38', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-39', 'SC002', '', '39', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-40', 'SC002', '', '40', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-41', 'SC002', '', '41', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-42', 'SC002', '', '42', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-43', 'SC002', '', '43', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-44', 'SC002', '', '44', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-45', 'SC002', '', '45', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-46', 'SC002', '', '46', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-47', 'SC002', '', '47', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-48', 'SC002', '', '48', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-49', 'SC002', '', '49', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-50', 'SC002', '', '50', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-51', 'SC002', '', '51', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-52', 'SC002', '', '52', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-53', 'SC002', '', '53', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-54', 'SC002', '', '54', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-55', 'SC002', '', '55', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-56', 'SC002', '', '56', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-57', 'SC002', '', '57', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-58', 'SC002', '', '58', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-59', 'SC002', '', '59', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-60', 'SC002', '', '60', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-61', 'SC002', '', '61', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-62', 'SC002', '', '62', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-63', 'SC002', '', '63', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-64', 'SC002', '', '64', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-65', 'SC002', '', '65', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-66', 'SC002', '', '66', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-67', 'SC002', '', '67', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-68', 'SC002', '', '68', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-69', 'SC002', '', '69', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-70', 'SC002', '', '70', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-71', 'SC002', '', '71', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-28-72', 'SC002', '', '72', '28', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-01', 'SC002', '', '01', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-02', 'SC002', '', '02', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-03', 'SC002', '', '03', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-04', 'SC002', '', '04', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-05', 'SC002', '', '05', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-06', 'SC002', '', '06', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-07', 'SC002', '', '07', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-08', 'SC002', '', '08', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-09', 'SC002', '', '09', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-10', 'SC002', '', '10', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-11', 'SC002', '', '11', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-12', 'SC002', '', '12', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-13', 'SC002', '', '13', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-14', 'SC002', '', '14', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-15', 'SC002', '', '15', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-16', 'SC002', '', '16', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-17', 'SC002', '', '17', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-18', 'SC002', '', '18', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-19', 'SC002', '', '19', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-20', 'SC002', '', '20', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-21', 'SC002', '', '21', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-22', 'SC002', '', '22', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-23', 'SC002', '', '23', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-24', 'SC002', '', '24', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-25', 'SC002', '', '25', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-26', 'SC002', '', '26', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-27', 'SC002', '', '27', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-28', 'SC002', '', '28', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-29', 'SC002', '', '29', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-30', 'SC002', '', '30', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-31', 'SC002', '', '31', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-32', 'SC002', '', '32', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-33', 'SC002', '', '33', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-34', 'SC002', '', '34', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-35', 'SC002', '', '35', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-36', 'SC002', '', '36', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-37', 'SC002', '', '37', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-38', 'SC002', '', '38', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-39', 'SC002', '', '39', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-40', 'SC002', '', '40', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-41', 'SC002', '', '41', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-42', 'SC002', '', '42', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-43', 'SC002', '', '43', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-44', 'SC002', '', '44', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-45', 'SC002', '', '45', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-46', 'SC002', '', '46', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-47', 'SC002', '', '47', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-48', 'SC002', '', '48', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-49', 'SC002', '', '49', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-50', 'SC002', '', '50', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-51', 'SC002', '', '51', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-52', 'SC002', '', '52', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-53', 'SC002', '', '53', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-54', 'SC002', '', '54', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-55', 'SC002', '', '55', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-56', 'SC002', '', '56', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-57', 'SC002', '', '57', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-58', 'SC002', '', '58', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-59', 'SC002', '', '59', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-60', 'SC002', '', '60', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-61', 'SC002', '', '61', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-62', 'SC002', '', '62', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-63', 'SC002', '', '63', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-64', 'SC002', '', '64', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-65', 'SC002', '', '65', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-66', 'SC002', '', '66', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-67', 'SC002', '', '67', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-68', 'SC002', '', '68', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-69', 'SC002', '', '69', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-70', 'SC002', '', '70', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-71', 'SC002', '', '71', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-29-72', 'SC002', '', '72', '29', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-01', 'SC002', '', '01', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-02', 'SC002', '', '02', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-03', 'SC002', '', '03', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-04', 'SC002', '', '04', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-05', 'SC002', '', '05', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-06', 'SC002', '', '06', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-07', 'SC002', '', '07', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-08', 'SC002', '', '08', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-09', 'SC002', '', '09', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-10', 'SC002', '', '10', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-11', 'SC002', '', '11', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-12', 'SC002', '', '12', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-13', 'SC002', '', '13', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-14', 'SC002', '', '14', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-15', 'SC002', '', '15', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-16', 'SC002', '', '16', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-17', 'SC002', '', '17', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-18', 'SC002', '', '18', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-19', 'SC002', '', '19', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-20', 'SC002', '', '20', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-21', 'SC002', '', '21', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-22', 'SC002', '', '22', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-23', 'SC002', '', '23', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-24', 'SC002', '', '24', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-25', 'SC002', '', '25', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-26', 'SC002', '', '26', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-27', 'SC002', '', '27', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-28', 'SC002', '', '28', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-29', 'SC002', '', '29', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-30', 'SC002', '', '30', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-31', 'SC002', '', '31', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-32', 'SC002', '', '32', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-33', 'SC002', '', '33', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-34', 'SC002', '', '34', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-35', 'SC002', '', '35', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-36', 'SC002', '', '36', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-37', 'SC002', '', '37', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-38', 'SC002', '', '38', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-39', 'SC002', '', '39', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-40', 'SC002', '', '40', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-41', 'SC002', '', '41', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-42', 'SC002', '', '42', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-43', 'SC002', '', '43', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-44', 'SC002', '', '44', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-45', 'SC002', '', '45', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-46', 'SC002', '', '46', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-47', 'SC002', '', '47', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-48', 'SC002', '', '48', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-49', 'SC002', '', '49', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-50', 'SC002', '', '50', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-51', 'SC002', '', '51', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-52', 'SC002', '', '52', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-53', 'SC002', '', '53', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-54', 'SC002', '', '54', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-55', 'SC002', '', '55', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-56', 'SC002', '', '56', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-57', 'SC002', '', '57', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-58', 'SC002', '', '58', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-59', 'SC002', '', '59', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-60', 'SC002', '', '60', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-61', 'SC002', '', '61', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-62', 'SC002', '', '62', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-63', 'SC002', '', '63', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-64', 'SC002', '', '64', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-65', 'SC002', '', '65', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-66', 'SC002', '', '66', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-67', 'SC002', '', '67', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-68', 'SC002', '', '68', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-69', 'SC002', '', '69', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-70', 'SC002', '', '70', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-71', 'SC002', '', '71', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-30-72', 'SC002', '', '72', '30', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-01', 'SC002', '', '01', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-02', 'SC002', '', '02', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-03', 'SC002', '', '03', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-04', 'SC002', '', '04', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-05', 'SC002', '', '05', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-06', 'SC002', '', '06', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-07', 'SC002', '', '07', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-08', 'SC002', '', '08', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-09', 'SC002', '', '09', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-10', 'SC002', '', '10', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-11', 'SC002', '', '11', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-12', 'SC002', '', '12', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-13', 'SC002', '', '13', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-14', 'SC002', '', '14', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-15', 'SC002', '', '15', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-16', 'SC002', '', '16', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-17', 'SC002', '', '17', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-18', 'SC002', '', '18', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-19', 'SC002', '', '19', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-20', 'SC002', '', '20', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-21', 'SC002', '', '21', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-22', 'SC002', '', '22', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-23', 'SC002', '', '23', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-24', 'SC002', '', '24', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-25', 'SC002', '', '25', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-26', 'SC002', '', '26', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-27', 'SC002', '', '27', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-28', 'SC002', '', '28', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-29', 'SC002', '', '29', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-30', 'SC002', '', '30', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-31', 'SC002', '', '31', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-32', 'SC002', '', '32', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-33', 'SC002', '', '33', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-34', 'SC002', '', '34', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-35', 'SC002', '', '35', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-36', 'SC002', '', '36', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-37', 'SC002', '', '37', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-38', 'SC002', '', '38', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-39', 'SC002', '', '39', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-40', 'SC002', '', '40', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-41', 'SC002', '', '41', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-42', 'SC002', '', '42', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-43', 'SC002', '', '43', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-44', 'SC002', '', '44', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-45', 'SC002', '', '45', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-46', 'SC002', '', '46', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-47', 'SC002', '', '47', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-48', 'SC002', '', '48', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-49', 'SC002', '', '49', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-50', 'SC002', '', '50', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-51', 'SC002', '', '51', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-52', 'SC002', '', '52', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-53', 'SC002', '', '53', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-54', 'SC002', '', '54', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-55', 'SC002', '', '55', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-56', 'SC002', '', '56', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-57', 'SC002', '', '57', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-58', 'SC002', '', '58', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-59', 'SC002', '', '59', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-60', 'SC002', '', '60', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-61', 'SC002', '', '61', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-62', 'SC002', '', '62', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-63', 'SC002', '', '63', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-64', 'SC002', '', '64', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-65', 'SC002', '', '65', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-66', 'SC002', '', '66', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-67', 'SC002', '', '67', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-68', 'SC002', '', '68', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-69', 'SC002', '', '69', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-70', 'SC002', '', '70', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-71', 'SC002', '', '71', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-31-72', 'SC002', '', '72', '31', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-01', 'SC002', '', '01', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-02', 'SC002', '', '02', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-03', 'SC002', '', '03', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-04', 'SC002', '', '04', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-05', 'SC002', '', '05', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-06', 'SC002', '', '06', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-07', 'SC002', '', '07', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-08', 'SC002', '', '08', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-09', 'SC002', '', '09', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-10', 'SC002', '', '10', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-11', 'SC002', '', '11', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-12', 'SC002', '', '12', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-13', 'SC002', '', '13', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-14', 'SC002', '', '14', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-15', 'SC002', '', '15', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-16', 'SC002', '', '16', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-17', 'SC002', '', '17', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-18', 'SC002', '', '18', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-19', 'SC002', '', '19', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-20', 'SC002', '', '20', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-21', 'SC002', '', '21', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-22', 'SC002', '', '22', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-23', 'SC002', '', '23', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-24', 'SC002', '', '24', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-25', 'SC002', '', '25', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-26', 'SC002', '', '26', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-27', 'SC002', '', '27', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-28', 'SC002', '', '28', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-29', 'SC002', '', '29', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-30', 'SC002', '', '30', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-31', 'SC002', '', '31', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-32', 'SC002', '', '32', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-33', 'SC002', '', '33', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-34', 'SC002', '', '34', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-35', 'SC002', '', '35', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-36', 'SC002', '', '36', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-37', 'SC002', '', '37', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-38', 'SC002', '', '38', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-39', 'SC002', '', '39', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-40', 'SC002', '', '40', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-41', 'SC002', '', '41', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-42', 'SC002', '', '42', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-43', 'SC002', '', '43', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-44', 'SC002', '', '44', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-45', 'SC002', '', '45', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-46', 'SC002', '', '46', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-47', 'SC002', '', '47', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-48', 'SC002', '', '48', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-49', 'SC002', '', '49', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-50', 'SC002', '', '50', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-51', 'SC002', '', '51', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-52', 'SC002', '', '52', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-53', 'SC002', '', '53', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-54', 'SC002', '', '54', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-55', 'SC002', '', '55', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-56', 'SC002', '', '56', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-57', 'SC002', '', '57', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-58', 'SC002', '', '58', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-59', 'SC002', '', '59', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-60', 'SC002', '', '60', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-61', 'SC002', '', '61', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-62', 'SC002', '', '62', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-63', 'SC002', '', '63', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-64', 'SC002', '', '64', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-65', 'SC002', '', '65', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-66', 'SC002', '', '66', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-67', 'SC002', '', '67', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-68', 'SC002', '', '68', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-69', 'SC002', '', '69', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-70', 'SC002', '', '70', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-71', 'SC002', '', '71', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-32-72', 'SC002', '', '72', '32', '0', '0', '', '20', '20', '20', 0, '', ''),
('SC002-33-01', 'SC002', '', '01', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-02', 'SC002', '', '02', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-03', 'SC002', '', '03', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-04', 'SC002', '', '04', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-05', 'SC002', '', '05', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-06', 'SC002', '', '06', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-07', 'SC002', '', '07', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-08', 'SC002', '', '08', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-09', 'SC002', '', '09', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-10', 'SC002', '', '10', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-11', 'SC002', '', '11', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-12', 'SC002', '', '12', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-13', 'SC002', '', '13', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-14', 'SC002', '', '14', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-15', 'SC002', '', '15', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-16', 'SC002', '', '16', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-17', 'SC002', '', '17', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-18', 'SC002', '', '18', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-19', 'SC002', '', '19', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-20', 'SC002', '', '20', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-21', 'SC002', '', '21', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-22', 'SC002', '', '22', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-23', 'SC002', '', '23', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-24', 'SC002', '', '24', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-25', 'SC002', '', '25', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-26', 'SC002', '', '26', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-27', 'SC002', '', '27', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-28', 'SC002', '', '28', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-29', 'SC002', '', '29', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-30', 'SC002', '', '30', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-31', 'SC002', '', '31', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-32', 'SC002', '', '32', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-33', 'SC002', '', '33', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-34', 'SC002', '', '34', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-35', 'SC002', '', '35', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-33-36', 'SC002', '', '36', '33', '0', '0', '', '1', '1', '1', 0, '', ''),
('SC002-34-01', 'SC002', '', '01', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-02', 'SC002', '', '02', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-03', 'SC002', '', '03', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-04', 'SC002', '', '04', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-05', 'SC002', '', '05', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-06', 'SC002', '', '06', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-07', 'SC002', '', '07', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-08', 'SC002', '', '08', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-09', 'SC002', '', '09', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-10', 'SC002', '', '10', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-11', 'SC002', '', '11', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-12', 'SC002', '', '12', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-13', 'SC002', '', '13', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-14', 'SC002', '', '14', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-15', 'SC002', '', '15', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-16', 'SC002', '', '16', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-17', 'SC002', '', '17', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-18', 'SC002', '', '18', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-19', 'SC002', '', '19', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-20', 'SC002', '', '20', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-21', 'SC002', '', '21', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-22', 'SC002', '', '22', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-23', 'SC002', '', '23', '34', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-34-24', 'SC002', '', '24', '34', '0', '0', '', '2', '2', '2', 0, '', '');
INSERT INTO `tb_stock_layout` (`stock_layout_code`, `stock_code`, `stock_type`, `stock_x`, `stock_y`, `stock_z`, `stock_use`, `stock_status`, `width`, `length`, `height`, `stock_layout_qty`, `product_code`, `stock_date`) VALUES
('SC002-35-01', 'SC002', '', '01', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-02', 'SC002', '', '02', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-03', 'SC002', '', '03', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-04', 'SC002', '', '04', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-05', 'SC002', '', '05', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-06', 'SC002', '', '06', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-07', 'SC002', '', '07', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-08', 'SC002', '', '08', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-09', 'SC002', '', '09', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-10', 'SC002', '', '10', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-11', 'SC002', '', '11', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-12', 'SC002', '', '12', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-13', 'SC002', '', '13', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-14', 'SC002', '', '14', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-15', 'SC002', '', '15', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-16', 'SC002', '', '16', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-17', 'SC002', '', '17', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC002-35-18', 'SC002', '', '18', '35', '0', '0', '', '2', '2', '2', 0, '', ''),
('SC003-01-01', 'SC003', 'Headland', '01', '01', '0', '0', ' ', '35', '49', '15', 0, ' ', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_stock_log`
--

CREATE TABLE `tb_stock_log` (
  `stock_log_code` varchar(50) NOT NULL COMMENT 'รหัสบันทึกคลังสินค้า',
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสผู้ขาย',
  `job_level_1_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT ' ',
  `job_level_2_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT ' ',
  `job_level_3_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT ' ',
  `job_level_4_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT ' ',
  `stock_product_type` varchar(45) DEFAULT '',
  `stock_code` varchar(50) NOT NULL COMMENT 'รหัสคลัง',
  `stock_layout_code` varchar(50) NOT NULL,
  `user_code` varchar(50) NOT NULL COMMENT 'รหัสผู้ใช้',
  `stock_type` varchar(50) NOT NULL COMMENT 'ประเภทคลังสินค้า',
  `balance_qty` int(11) NOT NULL COMMENT 'เหลือในช่องที่ระบบคำนวณ',
  `event_date` varchar(50) DEFAULT NULL COMMENT 'วันที่',
  `stock_log_ref_code` varchar(50) NOT NULL COMMENT 'รหัสอ้างอิงการเบิกก่อนหน้า',
  `stock_remark` varchar(200) DEFAULT NULL COMMENT 'คำอธิบายคลังสินค้า',
  `balance_confirm_qty` int(11) NOT NULL COMMENT 'เหลือในฃ่องที่คนเบิกยืนยัน',
  `stock_qty` varchar(50) NOT NULL COMMENT 'รายการเข้า-ออกของคลัง',
  `stock_price` varchar(50) NOT NULL COMMENT 'ราคาคลังสินค้า',
  `stock_issue_code` varchar(50) NOT NULL,
  `stock_return_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='บันทึกของคลังสินค้า';

--
-- Dumping data for table `tb_stock_log`
--

INSERT INTO `tb_stock_log` (`stock_log_code`, `product_code`, `job_level_1_name`, `job_level_2_name`, `job_level_3_name`, `job_level_4_name`, `stock_product_type`, `stock_code`, `stock_layout_code`, `user_code`, `stock_type`, `balance_qty`, `event_date`, `stock_log_ref_code`, `stock_remark`, `balance_confirm_qty`, `stock_qty`, `stock_price`, `stock_issue_code`, `stock_return_code`) VALUES
('SL202203001', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-01-02', 'U002', 'IN', 1, '2022-03-16  16:17:36', '', '', 1, '1', '10000', '', ''),
('SL202203002', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-02-01', 'U002', 'IN', 1, '2022-03-16  16:17:39', '', '', 1, '1', '10000', '', ''),
('SL202203003', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-02-02', 'U002', 'IN', 1, '2022-03-16  16:17:41', '', '', 1, '1', '10000', '', ''),
('SL202203004', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-03-01', 'U002', 'IN', 1, '2022-03-16  16:17:44', '', '', 1, '1', '10000', '', ''),
('SL202203005', 'PDC202201002', 'Job1', 'Job1-2', '', '', 'Loan', 'SC001', 'SC001-01-02', 'U002', 'OUT', 0, '2022-03-16  16:24:42', '-', '-', 0, '1', '10000', '', ''),
('SL202203005', 'PDC202201002', 'Job1', 'Job1-2', '', '', 'Loan', 'SC001', 'SC001-01-02', 'U002', 'OUT', 0, '2022-03-16  16:24:45', '-', '-', 0, '1', '10000', '', ''),
('SL202203006', 'PDC202201002', 'Job1', 'Job1-2', '', '', 'Loan', 'SC001', 'SC001-02-01', 'U002', 'OUT', 0, '2022-03-17  11:06:09', '-', '-', 0, '1', '10000', 'IC202203001', ''),
('SL202203007', 'PDC202201002', 'Job1', 'Job1-2', '', '', 'Loan', 'SC001', 'SC001-02-02', 'U002', 'OUT', 0, '2022-03-17  11:06:11', '-', '-', 0, '1', '10000', 'IC202203001', ''),
('SL202203008', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-04-02', 'U002', 'IN', 2, '2022-03-17  15:54:36', '', '', 2, '1', '10000', '', ''),
('SL202203009', 'PDC202201001', 'Job1', 'Job1-2', '', '', 'New', 'SC001', 'SC001-04-02', 'U002', 'OUT', 10, '2022-03-17  15:55:38', '-', '-', 10, '8', '10000', 'IC202203001', ''),
('SL202203010', 'PDC202201001', NULL, NULL, NULL, NULL, 'RF', 'SC001', 'SC001-07-02', 'U002', 'IN', 2, '2022-03-17  16:16:39', '', '', 2, '2', '10000', '', ''),
('SL202203011', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-01-02', 'U002', 'IN', 1, '2022-03-17  16:17:45', '', '', 1, '1', '10000', '', ''),
('SL202203012', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-02-01', 'U002', 'IN', 1, '2022-03-17  16:18:32', '', '', 1, '1', '10000', '', ''),
('SL202203013', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-04-02', 'U002', 'IN', 2, '2022-03-17  16:18:44', '', '', 2, '2', '10000', '', ''),
('SL202203014', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-02-02', 'U002', 'IN', 1, '2022-03-17  16:27:21', '', '', 1, '1', '10000', '', ''),
('SL202203015', 'PDC202201001', 'Job1', 'Job1-2', '', '', 'New', 'SC001', 'SC001-04-02', 'U002', 'OUT', 10, '2022-03-17  16:29:27', '-', '-', 10, '8', '10000', 'IC202203001', ''),
('SL202203016', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-01', 'U002', 'IN', 2, '2022-03-17  16:33:44', '', '', 2, '2', '10000', '', ''),
('SL202203017', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-02', 'U002', 'IN', 2, '2022-03-17  16:33:47', '', '', 2, '2', '10000', '', ''),
('SL202203018', 'PDC202201001', 'Job1', 'Job1-2', '', '', 'New', 'SC001', 'SC001-04-02', 'U002', 'OUT', 1, '2022-03-17  16:34:08', '-', '-', 1, '1', '10000', 'IC202203001', ''),
('SL202203019', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-11-01', 'U002', 'IN', 2, '2022-03-18  15:32:26', '', '', 2, '2', '10000', '', ''),
('SL202203020', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-11-02', 'U002', 'IN', 2, '2022-03-18  15:32:33', '', '', 2, '2', '10000', '', ''),
('SL202203021', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-01', 'U002', 'IN', 2, '2022-03-18  15:32:36', '', '', 2, '2', '10000', '', ''),
('SL202203022', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-02', 'U002', 'IN', 2, '2022-03-18  15:32:39', '', '', 2, '2', '10000', '', ''),
('SL202203023', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-09-01', 'U002', 'IN', 1, '2022-03-18  15:36:28', '', '', 1, '1', '10000', '', ''),
('SL202203024', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-09-02', 'U002', 'IN', 1, '2022-03-18  15:36:31', '', '', 1, '1', '10000', '', ''),
('SL202203025', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-10-01', 'U002', 'IN', 1, '2022-03-18  15:36:33', '', '', 1, '1', '10000', '', ''),
('SL202203026', 'PDC202201002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-10-02', 'U002', 'IN', 1, '2022-03-18  15:36:36', '', '', 1, '1', '10000', '', ''),
('SL202203027', 'PDC202201001', 'Job1', 'Job1-2', '111', '', 'New', 'SC001', 'SC001-11-01', 'U002', 'OUT', 1, '2022-03-18  16:25:25', '-', '-', 1, '1', '10000', 'IC202203001', ' '),
('SL202203028', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-11-01', 'U002', 'IN', 2, '2022-03-21  09:36:54', '', '', 2, '1', '10000', '', ''),
('SL202203029', 'PDC202203004', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-06-01', 'U002', 'IN', 1, '2022-03-21  09:40:02', '', '', 1, '1', '1', '', ''),
('SL202203030', 'PDC202203004', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-07-01', 'U002', 'IN', 1, '2022-03-21  09:40:06', '', '', 1, '1', '1', '', ''),
('SL202203031', 'PDC202203001', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-08-02', 'U002', 'IN', 1, '2022-03-21  09:43:36', '', '', 1, '1', '1', '', ''),
('SL202203032', 'PDC202203005', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-05-01', 'U002', 'IN', 1, '2022-03-21  09:44:05', '', '', 1, '1', '1', '', ''),
('SL202203033', 'PDC202203006', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-05-02', 'U002', 'IN', 1, '2022-03-21  09:44:19', '', '', 1, '1', '1', '', ''),
('SL202203034', 'PDC202203003', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-06-02', 'U002', 'IN', 1, '2022-03-21  09:46:43', '', '', 1, '1', '1', '', ''),
('SL202203035', 'PDC202201001', 'EDM+WIRECUT', '', '', '', 'New', 'SC001', 'SC001-11-02', 'U002', 'OUT', 1, '2022-03-21  10:03:33', '-', '-', 1, '1', '10000', 'IC202203002', ' '),
('SL202203036', 'PDC202201001', 'EDM+WIRECUT', '', '', '', 'New', 'SC001', 'SC001-11-02', 'U002', 'OUT', 0, '2022-03-21  10:04:56', '-', '-', 0, '1', '10000', 'IC202203003', ' '),
('SL202203037', 'PDC202203003', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-02-01', 'U002', 'IN', 1, '2022-03-21  10:20:33', '', '', 1, '1', '1', '', ''),
('SL202203038', 'PDC202203003', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-02-02', 'U002', 'IN', 1, '2022-03-21  10:20:36', '', '', 1, '1', '1', '', ''),
('SL202203039', 'PDC202203003', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-03-02', 'U002', 'IN', 1, '2022-03-21  10:20:39', '', '', 1, '1', '1', '', ''),
('SL202203040', 'PDC202203001', 'EDM+WIRECUT', '', '', '', 'Loan', 'SC001', 'SC001-08-02', 'U002', 'OUT', 0, '2022-03-21  10:29:24', '-', '-', 0, '1', '1', ' ', 'RTC202203001'),
('SL202203041', 'PDC202201001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-11-01', 'U002', 'IN', 1, '2022-03-21  10:38:41', '', '', 1, '1', '10000', '', ''),
('SL202203042', 'PDC202203002', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-07-02', 'U002', 'IN', 1, '2022-03-21  10:39:19', '', '', 1, '1', '1', '', ''),
('SL202203043', 'PDC202203001', NULL, NULL, NULL, NULL, 'Loan', 'SC001', 'SC001-08-02', 'MTP-U2022003', 'IN', 1, '2022-03-21  11:42:22', '', '', 1, '1', '1', '', ''),
('SL202203044', 'PDC202203001', 'FITTING', '', '', '', 'Loan', 'SC001', 'SC001-08-02', 'MTP-U2022005', 'OUT', 0, '2022-03-21  11:44:06', '-', '-', 0, '1', '1', ' ', 'RTC202203002'),
('SL202203045', 'PDC202203002', 'FITTING', '', '', '', 'Loan', 'SC001', 'SC001-07-02', 'MTP-U2022005', 'OUT', 0, '2022-03-21  14:30:42', '-', '-', 0, '1', '1', '', ''),
('SL202203046', 'PDC202203001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-02', 'MTP-U2022004', 'IN', 1, '2022-03-21  16:22:07', '', '', 1, '1', '1', '', ''),
('SL202203047', 'PDC202203001', 'FITTING', '', '', '', 'New', 'SC001', 'SC001-12-02', 'MTP-U2022004', 'OUT', 0, '2022-03-21  16:24:52', '-', '-', 0, '1', '1', '', ''),
('SL202203048', 'PDC202203001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-02', 'MTP-U2022004', 'IN', 1, '2022-03-21  16:25:41', '', '', 1, '1', '1', '', ''),
('SL202203049', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-09-01', 'MTP-U2022004', 'IN', 1, '2022-03-21  16:25:58', '', '', 1, '1', '1', '', ''),
('SL202203050', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-10-02', 'MTP-U2022004', 'IN', 1, '2022-03-21  16:26:04', '', '', 1, '1', '1', '', ''),
('SL202203051', 'PDC202203001', 'TEST', '', '', '', 'New', 'SC001', 'SC001-12-02', 'MTP-U2022004', 'OUT', 0, '2022-03-21  16:26:25', '-', '-', 0, '1', '1', '', ''),
('SL202203052', 'PDC202203004', 'TEST', '', '', '', 'New', 'SC001', 'SC001-09-01', 'MTP-U2022004', 'OUT', 0, '2022-03-21  16:28:03', '-', '-', 0, '1', '1', '', ''),
('SL202203053', 'PDC202203004', 'TEST', '', '', '', 'New', 'SC001', 'SC001-10-02', 'MTP-U2022004', 'OUT', 0, '2022-03-21  16:28:21', '-', '-', 0, '1', '1', '', ''),
('SL202203054', 'PDC202203002', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-11-02', 'MTP-U2022004', 'IN', 1, '2022-03-21  16:51:59', '', '', 1, '1', '1', '', ''),
('SL202203055', 'PDC202203003', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-10-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:18:50', '', '', 1, '1', '1', '', ''),
('SL202203056', 'PDC202203011', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-02-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:20:15', '', '', 1, '1', '1', '', ''),
('SL202203057', 'PDC202203009', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-04-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:21:18', '', '', 1, '1', '1', '', ''),
('SL202203058', 'PDC202203006', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-07-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:21:48', '', '', 1, '1', '1', '', ''),
('SL202203059', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-09-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:22:19', '', '', 1, '1', '1', '', ''),
('SL202203060', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-10-02', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:22:27', '', '', 1, '1', '1', '', ''),
('SL202203061', 'PDC202203007', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-06-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:23:16', '', '', 1, '1', '1', '', ''),
('SL202203062', 'PDC202203005', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-08-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:23:36', '', '', 1, '1', '1', '', ''),
('SL202203063', 'PDC202203012', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-07-02', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:29:38', '', '', 1, '1', '1', '', ''),
('SL202203064', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-06-02', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:32:36', '', '', 1, '1', '1', '', ''),
('SL202203065', 'PDC202203004', 'TEST', '', '', '', 'New', 'SC001', 'SC001-09-01', 'MTP-U2022004', 'OUT', 0, '2022-03-22  11:33:27', '-', '-', 0, '1', '1', '', ''),
('SL202203066', 'PDC202203004', 'TEST', '', '', '', 'New', 'SC001', 'SC001-10-02', 'MTP-U2022004', 'OUT', 0, '2022-03-22  11:33:39', '-', '-', 0, '1', '1', '', ''),
('SL202203067', 'PDC202203004', 'TEST', '', '', '', 'New', 'SC001', 'SC001-06-02', 'MTP-U2022004', 'OUT', 0, '2022-03-22  11:33:44', '-', '-', 0, '1', '1', '', ''),
('SL202203068', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-09-01', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:35:57', '', '', 1, '1', '1', '', ''),
('SL202203069', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-10-02', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:36:04', '', '', 1, '1', '1', '', ''),
('SL202203070', 'PDC202203013', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-06-02', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:36:32', '', '', 1, '1', '1', '', ''),
('SL202203071', 'PDC202203002', 'CNC', '', '', '', 'New', 'SC001', 'SC001-11-02', 'MTP-U2022004', 'OUT', 0, '2022-03-22  11:49:20', '-', '-', 0, '1', '1', '', ''),
('SL202203072', 'PDC202203002', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-11-02', 'MTP-U2022004', 'IN', 1, '2022-03-22  11:50:26', '', '', 1, '1', '1', '', ''),
('SL202203073', 'PDC202203009', 'FITTING', '', '', '', 'New', 'SC001', 'SC001-04-01', 'MTP-U2022021', 'OUT', 0, '2022-03-22  12:09:48', '-', '-', 0, '1', '1', '', ''),
('SL202203074', 'PDC202203009', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-04-01', 'MTP-U2022021', 'IN', 1, '2022-03-22  12:10:22', '', '', 1, '1', '1', '', ''),
('SL202203075', 'PDC202203004', 'CNC', '', '', '', 'New', 'SC001', 'SC001-09-01', 'MTP-U2022007', 'OUT', 0, '2022-03-22  13:49:10', '-', '-', 0, '1', '1', '', ''),
('SL202203076', 'PDC202203013', 'EDM+WIRECUT', '', '', '', 'New', 'SC001', 'SC001-06-02', 'MTP-U2022010', 'OUT', 0, '2022-03-22  13:50:25', '-', '-', 0, '1', '1', '', ''),
('SL202203077', 'PDC202203001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-02', 'MTP-U2022022', 'IN', 1, '2022-03-22  13:56:56', '', '', 1, '1', '1', '', ''),
('SL202203078', 'PDC202203001', 'TEST', '', '', '', 'New', 'SC001', 'SC001-12-02', 'MTP-U2022022', 'OUT', 0, '2022-03-22  13:58:16', '-', '-', 0, '1', '1', '', ''),
('SL202203079', 'PDC202203001', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-12-02', 'MTP-U2022022', 'IN', 1, '2022-03-22  13:58:52', '', '', 1, '1', '1', '', ''),
('SL202203080', 'PDC202203001', 'TEST', '', '', '', 'New', 'SC001', 'SC001-12-02', 'MTP-U2022022', 'OUT', 0, '2022-03-22  13:59:30', '-', '-', 0, '1', '1', '', ''),
('SL202203081', 'PDC202203011', 'EDM+WIRECUT', '', '', '', 'New', 'SC001', 'SC001-02-01', 'MTP-U2022010', 'OUT', 0, '2022-03-22  14:06:24', '-', '-', 0, '1', '1', '', ''),
('SL202203082', 'PDC202203011', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-02-01', 'MTP-U2022010', 'IN', 1, '2022-03-22  14:07:22', '', '', 1, '1', '1', '', ''),
('SL202203083', 'PDC202203003', 'EDM+WIRECUT', '', '', '', 'New', 'SC001', 'SC001-10-01', 'MTP-U2022010', 'OUT', 0, '2022-03-22  14:07:48', '-', '-', 0, '1', '1', '', ''),
('SL202203084', 'PDC202203004', NULL, NULL, NULL, NULL, 'New', 'SC001', 'SC001-09-01', 'MTP-U2022007', 'IN', 1, '2022-03-22  14:08:34', '', '', 1, '1', '1', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_success`
--

CREATE TABLE `tb_success` (
  `success_code` varchar(50) NOT NULL COMMENT 'รหัสที่สำเร็จ',
  `job_code` varchar(50) DEFAULT NULL COMMENT 'รหัสงาน',
  `job_op_tools_code` varchar(50) DEFAULT NULL COMMENT 'รหัสเครื่องมือของงาน',
  `job_op_code` varchar(50) DEFAULT NULL COMMENT 'ลักษณะของงาน',
  `success_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อที่สำเร็จ',
  `success_date` varchar(50) DEFAULT NULL COMMENT 'วันที่สำเร็จ',
  `success_type` varchar(50) DEFAULT NULL COMMENT 'ชนิดที่สำเร็จ',
  `success_result` varchar(50) DEFAULT NULL COMMENT 'ผลลัพธ์ที่สำเร็จ',
  `success_detail` varchar(50) DEFAULT NULL COMMENT 'รายละเอียดที่สำเร็จ',
  `success_image` varchar(50) DEFAULT NULL COMMENT 'ภาพที่สำเร็จ',
  `success_brand` varchar(50) DEFAULT NULL COMMENT 'ยี่ห้อที่สำเร็จ',
  `success_partname` varchar(50) DEFAULT NULL COMMENT 'ชื้อชิ้นส่วนที่สำเร็จ',
  `success_material` varchar(50) DEFAULT NULL COMMENT 'วัสดุที่สำเร็จ',
  `addby` varchar(50) DEFAULT NULL,
  `adddate` varchar(50) DEFAULT NULL,
  `updateby` varchar(50) DEFAULT NULL,
  `lastupdate` varchar(50) DEFAULT NULL,
  `product_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='การตรวจคุณภาพสินค้า';

--
-- Dumping data for table `tb_success`
--

INSERT INTO `tb_success` (`success_code`, `job_code`, `job_op_tools_code`, `job_op_code`, `success_name`, `success_date`, `success_type`, `success_result`, `success_detail`, `success_image`, `success_brand`, `success_partname`, `success_material`, `addby`, `adddate`, `updateby`, `lastupdate`, `product_code`) VALUES
('SC20220201', 'JC202201001', 'JOBOPTOOLS2022010001', 'JOBOP2022010001', '12', '2022-02-16', NULL, 'Finish', '', 'success/29f3c82f-9f61-4495-b91a-fcf5c45d3948.jpg', NULL, 'qwe', '123', '', '', '', '', 'PDC202201003'),
('SC20220202', 'JC202201001', 'JOBOPTOOLS2022010001', 'JOBOP2022010001', 'qwe', '2022-02-08', NULL, 'Finish', '', '', NULL, 'wqe', 'qwewe', '', '', '', '', 'PDC202201001');

-- --------------------------------------------------------

--
-- Table structure for table `tb_supplier`
--

CREATE TABLE `tb_supplier` (
  `supplier_code` varchar(50) NOT NULL COMMENT 'รหัสผู้ผลิต',
  `supplier_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อผู้ผลิต',
  `supplier_image` varchar(50) DEFAULT NULL COMMENT 'รูปผู้ผลิต',
  `supplier_tel` varchar(10) DEFAULT NULL COMMENT 'เบอร์โทรผู้ผลิต',
  `supplier_address` varchar(200) DEFAULT NULL COMMENT 'ที่อยู่ผู้ผลิต',
  `supplier_line_id` varchar(50) DEFAULT NULL COMMENT 'ไอดีไลน์ผู้ผลิต',
  `supplier_flex` varchar(15) DEFAULT NULL COMMENT 'เบอร์แฟ็กผู้ผลิต',
  `supplier_email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ผู้ขายหรือบริษัท';

--
-- Dumping data for table `tb_supplier`
--

INSERT INTO `tb_supplier` (`supplier_code`, `supplier_name`, `supplier_image`, `supplier_tel`, `supplier_address`, `supplier_line_id`, `supplier_flex`, `supplier_email`) VALUES
('SP202105002', 'ARNO (THAILAND) CO.,LTD.', 'supplier/6d83eb3d-2508-444e-bc8d-472dfdf04128.png', '093 432 12', 'ผู้นำเข้าและจัดจำหน่ายเครื่องมือช่างแบรนด์ชั้นนำระดับ', 'revelsoft@gmail.com', '020 265 3123-02', 'revelsoft@gmail.co.thsdad'),
('SP202201001', 'Arno', '', '093 432 12', '1234567', '123456789012345', '20 265 3123-02', 'revelsoft@gmail.co.th');

-- --------------------------------------------------------

--
-- Table structure for table `tb_system_setting`
--

CREATE TABLE `tb_system_setting` (
  `system_setting_code` varchar(50) NOT NULL COMMENT 'รหัส',
  `assign_job` int(11) NOT NULL DEFAULT '0' COMMENT 'ระบุงาน',
  `assign_op` int(11) NOT NULL DEFAULT '0' COMMENT 'ระบุุกระบวนการ',
  `assign_machine` int(11) NOT NULL DEFAULT '0' COMMENT 'ระบุเครื่องจักร',
  `assign_procress` int(11) NOT NULL DEFAULT '0' COMMENT 'ระบุขั้นตอน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tb_system_setting`
--

INSERT INTO `tb_system_setting` (`system_setting_code`, `assign_job`, `assign_op`, `assign_machine`, `assign_procress`) VALUES
('system_setting', 1, 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `user_code` varchar(50) NOT NULL COMMENT 'รหัสผู้ใช้งาน',
  `user_type_code` varchar(50) NOT NULL COMMENT 'ประเภทผู้ใช้',
  `department_code` varchar(50) NOT NULL,
  `license_code` varchar(50) NOT NULL COMMENT 'รหัสการอนุญาติการใช้งานเมนู',
  `user_firstname` varchar(50) DEFAULT NULL COMMENT 'ชื้อผู้ใช้',
  `user_lastname` varchar(50) DEFAULT NULL COMMENT 'นามสกุลผู้ใช้',
  `user_username` varchar(50) DEFAULT NULL COMMENT 'ชื่อผู้ใข้งาน',
  `user_password` varchar(50) DEFAULT NULL COMMENT 'พาสเวิร์ดผู้ใช้',
  `user_RFID` varchar(50) NOT NULL COMMENT 'RFID',
  `user_tel` varchar(10) DEFAULT NULL COMMENT 'เบอร์โทร',
  `user_email` varchar(200) DEFAULT '',
  `addby` varchar(50) DEFAULT NULL COMMENT 'ผู้เพิ่มข้อมูล',
  `adddate` varchar(50) DEFAULT NULL COMMENT 'วันที่เพิ่ม',
  `updateby` varchar(50) DEFAULT NULL COMMENT 'วันแก้ไข',
  `lastupdate` varchar(50) DEFAULT NULL COMMENT 'วันที่แก้ไขล่าสุด'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ตารางผู้ใช้งาน';

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`user_code`, `user_type_code`, `department_code`, `license_code`, `user_firstname`, `user_lastname`, `user_username`, `user_password`, `user_RFID`, `user_tel`, `user_email`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('MTP-U2022003', '', 'DC202111001', 'L20220002', 'Panboon', 'Ammin', '', '', '3d008d745a', '', '', 'U002', '2022-03-18 14:21:28', 'MTP-U2022004', '2022-03-21 16:40:20'),
('MTP-U2022004', '', 'DC202112001', 'L20210005', 'Nuttapong', 'Eakphisalkul', '', '', '01120460EF', '', '', 'U002', '2022-03-18 14:22:32', 'MTP-U2022004', '2022-03-22 12:05:30'),
('MTP-U2022005', '', 'DC202111002', 'L20220002', 'Chaiyos', 'Janpeth', '', '', '01120474CC', '', '', 'U002', '2022-03-18 14:29:42', 'MTP-U2022004', '2022-03-21 16:54:05'),
('MTP-U2022006', '', 'DC202111001', 'L20220002', 'Prasert', 'Nunork', '', '', '71007968ea', '', '', 'U002', '2022-03-18 14:30:58', 'MTP-U2022004', '2022-03-22 11:42:33'),
('MTP-U2022007', '', 'DC202111002', 'L20220002', 'Damrong', 'Kansawai', '', '', '71007968E0', '', '', 'U002', '2022-03-18 14:31:51', 'MTP-U2022004', '2022-03-22 13:45:52'),
('MTP-U2022008', '', 'DC202111002', 'L20220002', 'Sumet', 'Wijitthum', '', '', '71007968e6', '', '', 'U002', '2022-03-18 14:32:42', 'MTP-U2022004', '2022-03-22 11:41:23'),
('MTP-U2022009', '', 'DC202111002', 'L20220002', 'Jaroensuk', 'Yeunyong', '', '', '0112047337', '', '', 'U002', '2022-03-18 14:34:00', 'MTP-U2022004', '2022-03-21 16:55:08'),
('MTP-U2022010', '', 'DC202111002', 'L20220002', 'Thamonthorn', 'Pittayaworanart', '', '', '71007968ca', '', '', 'U002', '2022-03-18 14:35:13', 'MTP-U2022004', '2022-03-22 11:40:15'),
('MTP-U2022011', '', 'DC202111002', 'L20220002', 'Nuttapong', 'Seneewong Na ayuthaya', '', '', '7100796904', '', '', 'U002', '2022-03-18 14:36:09', 'MTP-U2022004', '2022-03-22 13:44:14'),
('MTP-U2022012', '', 'DC202111001', 'L20220002', 'Jrun', 'Srijampathong', '', '', '123465', '', '', 'U002', '2022-03-18 14:39:44', 'MTP-U2022004', '2022-03-21 16:55:43'),
('MTP-U2022013', '', 'DC202111001', 'L20220002', 'Sakda', 'Boontham', '', '', '71007968de', '', '', 'U002', '2022-03-18 14:40:19', 'MTP-U2022004', '2022-03-22 12:07:07'),
('MTP-U2022014', '', 'DC202111001', 'L20220002', 'Anucha', 'Maisanthia', '', '', '71007968d5', '', '', 'U002', '2022-03-18 14:41:23', 'MTP-U2022004', '2022-03-22 11:41:43'),
('MTP-U2022015', '', 'DC202111001', 'L20220002', 'Waraporn', 'Gaetthong', '', '', '123456', '', '', 'U002', '2022-03-18 14:42:19', 'MTP-U2022004', '2022-03-21 16:56:34'),
('MTP-U2022016', '', 'DC202111001', 'L20220002', 'Kuntida', 'Warakun', '', '', '12002bb5cd', '', '', 'U002', '2022-03-18 14:43:07', 'MTP-U2022004', '2022-03-22 11:40:41'),
('MTP-U2022017', '', 'DC202111001', 'L20220002', 'Watcharin', 'Mongkoongoon', '', '', '12002BB5C1', '', '', 'U002', '2022-03-18 14:47:21', 'MTP-U2022004', '2022-03-22 13:46:13'),
('MTP-U2022018', '', 'DC202201002', 'L20220001', 'Jiraporn', 'Tanumporn', '', '', '71007968e9', '', '', 'U002', '2022-03-18 14:48:01', 'MTP-U2022004', '2022-03-22 11:42:02'),
('MTP-U2022019', '', 'DC202111001', 'L20220002', 'Teerasak', 'Jaroensap', '', '', '12002BB5CE', '', '', 'U002', '2022-03-18 14:49:04', 'MTP-U2022004', '2022-03-22 13:51:39'),
('MTP-U2022020', '', 'DC202111001', 'L20220002', 'Tanukit', 'Faikan', '', '', '12002bb5d1', '', '', 'U002', '2022-03-18 14:49:57', 'MTP-U2022004', '2022-03-22 11:41:06'),
('MTP-U2022021', '', 'DC202201003', 'L20220002', 'Bunrueng', 'Buntame', '', '', '0112046078', '', '', 'MTP-U2022004', '2022-03-22 11:59:37', 'MTP-U2022004', '2022-03-22 12:00:56'),
('MTP-U2022022', '', 'DC202201002', 'L20220002', 'Kittima', 'Noimee', '', '', '12002BB5CF', '', '', 'MTP-U2022004', '2022-03-22 13:47:14', 'MTP-U2022004', '2022-03-22 13:47:52'),
('MTP-U2022023', '', 'DC202111001', 'L20220002', 'Pichet', 'kailaodsin', '', '', '71007968ED', '', '', 'MTP-U2022004', '2022-03-22 14:03:54', 'MTP-U2022004', '2022-03-22 14:04:12'),
('U002', 'UTC202111006', 'DC202201001', 'L20210005', 'admin', 'admin', 'admin', '123456', '14', '0986203605', 'mr.jeck.ryo@gmail.com', NULL, NULL, 'U002', '2022-02-06 22:22:01');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_group`
--

CREATE TABLE `tb_user_group` (
  `user_group_code` varchar(50) NOT NULL,
  `user_group_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_user_group`
--

INSERT INTO `tb_user_group` (`user_group_code`, `user_group_name`) VALUES
('UGC202201002', 'MMC'),
('UGC202201003', 'ADMIN TMD'),
('UGC202201004', 'MACHINE TMD'),
('UGC202202001', 'MMC2'),
('UGC202203001', 'TEST');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_group_product`
--

CREATE TABLE `tb_user_group_product` (
  `user_group_product_code` varchar(50) NOT NULL,
  `user_group_code` varchar(50) NOT NULL,
  `product_code` varchar(50) NOT NULL,
  `withdraw_type` varchar(50) NOT NULL,
  `withdraw_license` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `withdraw_time_type` varchar(50) NOT NULL,
  `withdraw_qty` int(11) NOT NULL,
  `withdraw_time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_user_group_product`
--

INSERT INTO `tb_user_group_product` (`user_group_product_code`, `user_group_code`, `product_code`, `withdraw_type`, `withdraw_license`, `withdraw_time_type`, `withdraw_qty`, `withdraw_time`) VALUES
('GP2022030001', 'UGC202201002', 'PDC202203001', '', '0', '', 0, 0),
('GP2022030002', 'UGC202201002', 'PDC202203002', '', '0', '', 0, 0),
('GP2022030003', 'UGC202201002', 'PDC202203003', '', '0', '', 0, 0),
('GP2022030004', 'UGC202201002', 'PDC202203004', '', '0', '', 0, 0),
('GP2022030005', 'UGC202201002', 'PDC202203005', '', '0', '', 0, 0),
('GP2022030006', 'UGC202201002', 'PDC202203006', '', '0', '', 0, 0),
('GP2022030007', 'UGC202201002', 'PDC202203007', '', '0', '', 0, 0),
('GP2022030008', 'UGC202201002', 'PDC202203009', '', '0', '', 0, 0),
('GP2022030009', 'UGC202201002', 'PDC202203010', '', '0', '', 0, 0),
('GP2022030010', 'UGC202201002', 'PDC202203011', '', '0', '', 0, 0),
('GP2022030011', 'UGC202201004', 'PDC202203001', '', '0', '', 0, 0),
('GP2022030012', 'UGC202201004', 'PDC202203002', '', '0', '', 0, 0),
('GP2022030013', 'UGC202201004', 'PDC202203003', '', '0', '', 0, 0),
('GP2022030014', 'UGC202201004', 'PDC202203004', '', '0', '', 0, 0),
('GP2022030015', 'UGC202201004', 'PDC202203005', '', '0', '', 0, 0),
('GP2022030016', 'UGC202201004', 'PDC202203006', '', '0', '', 0, 0),
('GP2022030017', 'UGC202201004', 'PDC202203007', '', '0', '', 0, 0),
('GP2022030018', 'UGC202201004', 'PDC202203009', '', '0', '', 0, 0),
('GP2022030019', 'UGC202201004', 'PDC202203010', '', '0', '', 0, 0),
('GP2022030020', 'UGC202201004', 'PDC202203011', '', '0', '', 0, 0),
('GP2022030021', 'UGC202201004', 'PDC202203012', '', '0', '', 0, 0),
('GP2022030022', 'UGC202201004', 'PDC202203013', '', '0', '', 0, 0),
('GP2022030023', 'UGC202203001', 'PDC202203001', '', '0', '', 0, 0),
('GP2022030024', 'UGC202203001', 'PDC202203002', '', '0', '', 0, 0),
('GP2022030025', 'UGC202203001', 'PDC202203003', '', '0', '', 0, 0),
('GP2022030026', 'UGC202203001', 'PDC202203004', '', '0', '', 0, 0),
('GP2022030027', 'UGC202203001', 'PDC202203005', '', '0', '', 0, 0),
('GP2022030028', 'UGC202203001', 'PDC202203006', '', '0', '', 0, 0),
('GP2022030029', 'UGC202203001', 'PDC202203007', '', '0', '', 0, 0),
('GP2022030030', 'UGC202203001', 'PDC202203009', '', '0', '', 0, 0),
('GP2022030031', 'UGC202203001', 'PDC202203010', '', '0', '', 0, 0),
('GP2022030032', 'UGC202203001', 'PDC202203011', '', '0', '', 0, 0),
('GP2022030033', 'UGC202203001', 'PDC202203012', '', '0', '', 0, 0),
('GP2022030034', 'UGC202203001', 'PDC202203013', '', '0', '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_license_group`
--

CREATE TABLE `tb_user_license_group` (
  `user_code` varchar(50) NOT NULL,
  `user_group_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_user_license_group`
--

INSERT INTO `tb_user_license_group` (`user_code`, `user_group_code`) VALUES
(' ', ''),
(' ', 'UGC202201002'),
(' ', 'UGC202201003'),
(' ', 'UGC202201004'),
('MTP-U2021001', 'UGC202201002'),
('MTP-U2021003', 'UGC202110001'),
('MTP-U2021003', 'UGC202111001'),
('MTP-U2022001', 'UGC202201002'),
('MTP-U2022002', 'UGC202201003'),
('MTP-U2022003', 'UGC202201004'),
('MTP-U2022004', 'UGC202203001'),
('MTP-U2022005', 'UGC202201004'),
('MTP-U2022006', 'UGC202201004'),
('MTP-U2022007', 'UGC202201004'),
('MTP-U2022008', 'UGC202201004'),
('MTP-U2022009', 'UGC202201004'),
('MTP-U2022010', 'UGC202201004'),
('MTP-U2022011', 'UGC202201004'),
('MTP-U2022012', 'UGC202201004'),
('MTP-U2022013', 'UGC202201004'),
('MTP-U2022014', 'UGC202201004'),
('MTP-U2022015', 'UGC202201004'),
('MTP-U2022016', 'UGC202201004'),
('MTP-U2022017', 'UGC202201004'),
('MTP-U2022018', 'UGC202201004'),
('MTP-U2022019', 'UGC202201004'),
('MTP-U2022020', 'UGC202201004'),
('MTP-U2022021', 'UGC202201004'),
('MTP-U2022022', 'UGC202201004'),
('MTP-U2022023', 'UGC202201004'),
('U002', 'UGC202201002');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_type`
--

CREATE TABLE `tb_user_type` (
  `user_type_code` varchar(50) NOT NULL COMMENT 'รหัสประภทผู้ใช้งาน',
  `user_type_name` varchar(50) DEFAULT NULL COMMENT 'ชื่อประเภทผู้ใช้งาน',
  `addby` varchar(50) DEFAULT NULL COMMENT 'ผู้เพิ่มข้อมูล',
  `adddate` varchar(50) DEFAULT NULL COMMENT 'วันที่เพิ่ม',
  `updateby` varchar(50) DEFAULT NULL COMMENT 'วันแก้ไข',
  `lastupdate` varchar(50) DEFAULT NULL COMMENT 'วันที่แก้ไขล่าสุด'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ประเภทผู้ใช้งาน';

--
-- Dumping data for table `tb_user_type`
--

INSERT INTO `tb_user_type` (`user_type_code`, `user_type_name`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('UTC202111002', 'Sales', NULL, NULL, NULL, NULL),
('UTC202111003', 'เติมสินค้า (MC GROUP)', NULL, NULL, NULL, NULL),
('UTC202111004', 'เติมสินค้า (Supplier)', NULL, NULL, NULL, NULL),
('UTC202111005', 'เบิกสินค้า', NULL, NULL, NULL, NULL),
('UTC202111006', 'ADMIN', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_department`
--
ALTER TABLE `tb_department`
  ADD PRIMARY KEY (`department_code`);

--
-- Indexes for table `tb_how2buy`
--
ALTER TABLE `tb_how2buy`
  ADD PRIMARY KEY (`how2buy_code`);

--
-- Indexes for table `tb_incident`
--
ALTER TABLE `tb_incident`
  ADD PRIMARY KEY (`incident_code`);

--
-- Indexes for table `tb_incident_type`
--
ALTER TABLE `tb_incident_type`
  ADD PRIMARY KEY (`incident_type_code`);

--
-- Indexes for table `tb_issue`
--
ALTER TABLE `tb_issue`
  ADD PRIMARY KEY (`issue_code`);

--
-- Indexes for table `tb_isuse_list`
--
ALTER TABLE `tb_isuse_list`
  ADD PRIMARY KEY (`isuse_list_code`);

--
-- Indexes for table `tb_job`
--
ALTER TABLE `tb_job`
  ADD PRIMARY KEY (`job_code`);

--
-- Indexes for table `tb_job_level_1`
--
ALTER TABLE `tb_job_level_1`
  ADD PRIMARY KEY (`job_level_1_name`);

--
-- Indexes for table `tb_job_level_2`
--
ALTER TABLE `tb_job_level_2`
  ADD PRIMARY KEY (`job_level_1_name`,`job_level_2_name`);

--
-- Indexes for table `tb_job_level_3`
--
ALTER TABLE `tb_job_level_3`
  ADD PRIMARY KEY (`job_level_2_name`,`job_level_1_name`,`job_level_3_name`);

--
-- Indexes for table `tb_job_level_4`
--
ALTER TABLE `tb_job_level_4`
  ADD PRIMARY KEY (`job_level_3_name`,`job_level_2_name`,`job_level_1_name`,`job_level_4_name`);

--
-- Indexes for table `tb_job_op`
--
ALTER TABLE `tb_job_op`
  ADD PRIMARY KEY (`job_op_code`);

--
-- Indexes for table `tb_job_op_machine`
--
ALTER TABLE `tb_job_op_machine`
  ADD PRIMARY KEY (`job_op_machine_code`);

--
-- Indexes for table `tb_job_op_tools`
--
ALTER TABLE `tb_job_op_tools`
  ADD PRIMARY KEY (`job_op_tools_code`);

--
-- Indexes for table `tb_job_op_tools_use`
--
ALTER TABLE `tb_job_op_tools_use`
  ADD PRIMARY KEY (`job_op_tools_use_code`);

--
-- Indexes for table `tb_license`
--
ALTER TABLE `tb_license`
  ADD PRIMARY KEY (`license_code`);

--
-- Indexes for table `tb_machine`
--
ALTER TABLE `tb_machine`
  ADD PRIMARY KEY (`machine_code`);

--
-- Indexes for table `tb_machine_brand`
--
ALTER TABLE `tb_machine_brand`
  ADD PRIMARY KEY (`machine_brand_code`);

--
-- Indexes for table `tb_machine_model`
--
ALTER TABLE `tb_machine_model`
  ADD PRIMARY KEY (`machine_model_code`);

--
-- Indexes for table `tb_machine_type`
--
ALTER TABLE `tb_machine_type`
  ADD PRIMARY KEY (`machine_type_code`);

--
-- Indexes for table `tb_menu`
--
ALTER TABLE `tb_menu`
  ADD PRIMARY KEY (`menu_code`);

--
-- Indexes for table `tb_permission`
--
ALTER TABLE `tb_permission`
  ADD PRIMARY KEY (`permission_code`);

--
-- Indexes for table `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`product_code`);

--
-- Indexes for table `tb_production`
--
ALTER TABLE `tb_production`
  ADD PRIMARY KEY (`production_code`);

--
-- Indexes for table `tb_product_brand`
--
ALTER TABLE `tb_product_brand`
  ADD PRIMARY KEY (`product_brand_code`);

--
-- Indexes for table `tb_product_group`
--
ALTER TABLE `tb_product_group`
  ADD PRIMARY KEY (`product_group_code`);

--
-- Indexes for table `tb_product_menu_list`
--
ALTER TABLE `tb_product_menu_list`
  ADD PRIMARY KEY (`product_menu_name`,`product_code`);

--
-- Indexes for table `tb_product_type`
--
ALTER TABLE `tb_product_type`
  ADD PRIMARY KEY (`product_type_code`);

--
-- Indexes for table `tb_record`
--
ALTER TABLE `tb_record`
  ADD PRIMARY KEY (`records_code`);

--
-- Indexes for table `tb_reorder`
--
ALTER TABLE `tb_reorder`
  ADD PRIMARY KEY (`reorders_code`);

--
-- Indexes for table `tb_reorder_list`
--
ALTER TABLE `tb_reorder_list`
  ADD PRIMARY KEY (`reoder_list_code`);

--
-- Indexes for table `tb_report_setting`
--
ALTER TABLE `tb_report_setting`
  ADD PRIMARY KEY (`report_setting_code`);

--
-- Indexes for table `tb_send_setting`
--
ALTER TABLE `tb_send_setting`
  ADD PRIMARY KEY (`send_setting_code`);

--
-- Indexes for table `tb_send_setting_list`
--
ALTER TABLE `tb_send_setting_list`
  ADD PRIMARY KEY (`send_setting_code`,`send_setting_email`);

--
-- Indexes for table `tb_stock`
--
ALTER TABLE `tb_stock`
  ADD PRIMARY KEY (`stock_code`);

--
-- Indexes for table `tb_stock_layout`
--
ALTER TABLE `tb_stock_layout`
  ADD PRIMARY KEY (`stock_layout_code`);

--
-- Indexes for table `tb_success`
--
ALTER TABLE `tb_success`
  ADD PRIMARY KEY (`success_code`);

--
-- Indexes for table `tb_supplier`
--
ALTER TABLE `tb_supplier`
  ADD PRIMARY KEY (`supplier_code`);

--
-- Indexes for table `tb_system_setting`
--
ALTER TABLE `tb_system_setting`
  ADD PRIMARY KEY (`system_setting_code`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`user_code`);

--
-- Indexes for table `tb_user_group`
--
ALTER TABLE `tb_user_group`
  ADD PRIMARY KEY (`user_group_code`);

--
-- Indexes for table `tb_user_group_product`
--
ALTER TABLE `tb_user_group_product`
  ADD PRIMARY KEY (`user_group_product_code`);

--
-- Indexes for table `tb_user_license_group`
--
ALTER TABLE `tb_user_license_group`
  ADD PRIMARY KEY (`user_code`,`user_group_code`);

--
-- Indexes for table `tb_user_type`
--
ALTER TABLE `tb_user_type`
  ADD PRIMARY KEY (`user_type_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
