---
title: What's in the VEHICLE data file?
definition: Overview of the what's in the VEHICLE data file.
---
Contains information describing:

- the motor vehicles in-transport 
- the drivers of motor vehicles in-transport 
-
who are involved in the crash. 

There is **one record per motor vehicle in-transport**. 

Parked and working vehicle information is in the [[PARKWORK]] data file.

| Long Form Data Name                                         | Data Element      |
| ----------------------------------------------------------- | ----------------- |
| Number of Occupants                                         | [[NUMOCCS]]       |
| Unit Type                                                   | [[UNITTYPE]]      |
| Hit-and-Run                                                 | [[HIT_RUN]]       |
| Registration State                                          | [[REG_STAT]]      |
| Registered Vehicle Owner                                    | [[OWNER]]         |
| Vehicle Identification Number (VIN)                         | [[VIN]]           |
| Vehicle Model Year                                          | [[MOD_YEAR]]      |
| vPIC Make                                                   | [[VPICMAKE]]      |
| vPIC Model                                                  | [[VPICMODEL]]     |
| vPIC Body Class                                             | [[VPICBODYCLASS]] |
| NCSA Make                                                   | [[MAKE]]          |
| NCSA Model                                                  | [[MODEL]]         |
| NCSA Body Type                                              | [[BODY_TYP]]      |
| Final Stage Body Class                                      | [[ICFINALBODY]]   |
| Power Unit GVWR From                                        | [[GVWR_FROM]]     |
| Power Unit GVWR To                                          | [[GVWR_TO]]       |
| Vehicle Trailing                                            | [[TOW_VEH]]       |
| Trailer VIN 1                                               | [[TRLR1VIN]]      |
| Trailer VIN 2                                               | [[TRLR2VIN]]      |
| Trailer VIN 3                                               | [[TRLR3VIN]]      |
| Trailer GVWR 1                                              | [[TRLR1GVWR]]     |
| Trailer GVWR 2                                              | [[TRLR2GVWR]]     |
| Trailer GVWR 3                                              | [[TRLR3GVWR]]     |
| Jackknife                                                   | [[J_KNIFE]]       |
| MCID                                                        | [[MCARR_ID]]      |
| MCID Issuing Authority                                      | [[MCARR_I1]]      |
| MCID Identification Number                                  | [[MCARR_I2]]      |
| Vehicle Configuration                                       | [[V_CONFIG]]      |
| Cargo Body Type                                             | [[CARGO_BT]]      |
| Hazardous Material Involvement                              | [[HAZ_INV]]       |
| Hazardous Material Placard                                  | [[HAZ_PLAC]]      |
| Hazardous Material Identification Number                    | [[HAZ_ID]]        |
| Hazardous Material Class Number                             | [[HAZ_CNO]]       |
| Release of Hazardous Material from the Cargo Compartment    | [[HAZ_REL]]       |
| Bus Use                                                     | [[BUS_USE]]       |
| Special Use                                                 | [[SPEC_USE]]      |
| Emergency Motor Vehicle Use                                 | [[EMER_USE]]      |
| Travel Speed                                                | [[TRAV_SP]]       |
| Vehicle Underride/Override                                  | [[UNDEROVERRIDE]] |
| Rollover                                                    | [[ROLLOVER]]      |
| Location of Rollover                                        | [[ROLINLOC]]      |
| Area of Impacts—Initial Contact Point                       | [[IMPACT1]]       |
| Extent of Damage                                            | [[DEFORMED]]      |
| Vehicle Towed                                               | [[TOWED]]         |
| Most Harmful Event                                          | [[M_HARM]]        |
| Fire Occurrence                                             | [[FIRE_EXP]]      |
| Automation System Present                                   | [[ADS_PRES]]      |
| Highest Automation System Level Present                     | [[ADS_LEV]]       |
| Highest Automation System Level Engaged at Time of Crash    | [[ADS_ENG]]       |
| NCSA Make Model Combined                                    | [[MAK_MOD]]       |
| VIN Character 1                                             | [[VIN_1]]         |
| VIN Character 2                                             | [[VIN_2]]         |
| VIN Character 3                                             | [[VIN_3]]         |
| VIN Character 4                                             | [[VIN_4]]         |
| VIN Character 5                                             | [[VIN_5]]         |
| VIN Character 6                                             | [[VIN_6]]         |
| VIN Character 7                                             | [[VIN_7]]         |
| VIN Character 8                                             | [[VIN_8]]         |
| VIN Character 9                                             | [[VIN_9]]         |
| VIN Character 10                                            | [[VIN_10]]        |
| VIN Character 11                                            | [[VIN_11]]        |
| VIN Character 12                                            | [[VIN_12]]        |
| Fatalities in Vehicle                                       | [[DEATHS]]        |
| Driver Drinking                                             | [[DR_DRINK]]      |
| Driver Presence                                             | [[DR_PRES]]       |
| Driver’s License State                                      | [[L_STATE]]       |
| Driver’s ZIP Code                                           | [[DR_ZIP]]        |
| Non-CDL License Type                                        | [[L_TYPE]]        |
| Non-CDL License Status                                      | [[L_STATUS]]      |
| CDL License Status                                          | [[CDL_STAT]]      |
| Compliance with CDL Endorsements                            | [[L_ENDORS]]      |
| License Compliance with Class of Vehicle                    | [[L_COMPL]]       |
| Compliance with License Restrictions                        | [[L_RESTRI]]      |
| Driver Height                                               | [[DR_HGT]]        |
| Driver Weight                                               | [[DR_WGT]]        |
| Previous Recorded Crashes                                   | [[PREV_ACC]]      |
| Underage Admin Per Se for BAC                               | [[PREV_SUS1]]     |
| Admin Per Se for BAC (Not Underage)                         | [[PREV_SUS2]]     |
| Other Suspensions/Revocations/Withdrawals                   | [[PREV_SUS3]]     |
| Previous DWI Convictions                                    | [[PREV_DWI]]      |
| Previous Speeding Convictions                               | [[PREV_SPD]]      |
| Previous Other Moving Violation Convictions                 | [[PREV_OTH]]      |
| Month of Oldest Crash/Suspension/Conviction                 | [[FIRST_MO]]      |
| Year of Oldest Crash/Suspension/Conviction                  | [[FIRST_YR]]      |
| Month of Most Recent Crash/Suspension/Conviction            | [[LAST_MO]]       |
| Year of Most Recent Crash/Suspension/Conviction             | [[LAST_YR]]       |
| Speeding Related                                            | [[SPEEDREL]]      |
| Trafficway Description                                      | [[VTRAFWAY]]      |
| Total Lanes in Roadway                                      | [[VNUM_LAN]]      |
| Speed Limit                                                 | [[VSPD_LIM]]      |
| Roadway Alignment                                           | [[VALIGN]]        |
| Roadway Grade                                               | [[VPROFILE]]      |
| Roadway Surface Type                                        | [[VPAVETYP]]      |
| Roadway Surface Condition                                   | [[VSURCOND]]      |
| Traffic Control Device                                      | [[VTRAFCON]]      |
| Traffic Control Device Functioning                          | [[VTCONT_F]]      |
| Pre-Event Movement (Prior to Recognition of Critical Event) | [[P_CRASH1]]      |
| Critical Event—Precrash                                     | [[P_CRASH2]]      |
| Attempted Avoidance Maneuver                                | [[P_CRASH3]]      |
| Pre-Impact Stability                                        | [[PCRASH4]]       |
| Pre-Impact Location                                         | [[PCRASH5]]       |
| Crash Type Configuration                                    | [[ACC_TYPE]]      |

