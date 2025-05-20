---
title: What's in the PARKWORK data file?
definition: Overview of the what's in the PARKWORK data file.
---
Contains **information about parked and working vehicles** that were involved in FARS crashes. 

A **parked vehicle** is a motor vehicle that is *stopped off the roadway*. 

A **working vehicle** is a motor vehicle *involved in trafficway maintenance, construction, or utility activities*. 

It *excludes* vehicles performing:
- private maintenance
- construction
- utility activities

Data users are strongly advised to consult the annual FARS/CRSS Coding and Validation Manuals for a detailed description. 

**There is one record per parked/working vehicle.**

| Long Form Data Name                                      | Data Element       |
| -------------------------------------------------------- | ------------------ |
| State Number                                             | [[STATE 1]]          |
| Consecutive Number                                       | [[ST_CASE 1]]        |
| Vehicle Number                                           | [[VEH_NO 1]]         |
| Trailer Vehicle Identification Number                    | [[PTRLR3VIN]]      |
| Trailer Gross Vehicle Weight Rating (GVWR)               | [[PTRLR1GVWR]]     |
| Trailer Gross Vehicle Weight Rating (GVWR)               | [[PTRLR2GVWR]]     |
| Trailer Gross Vehicle Weight Rating (GVWR)               | [[PTRLR3GVWR]]     |
| Motor Carrier Identification Number                      | [[PMCARR_ID]]      |
| MCID Issuing Authority                                   | [[PMCARR_I1]]      |
| MCID Identification Number                               | [[PMCARR_I2]]      |
| Vehicle Configuration                                    | [[PV_CONFIG]]      |
| Cargo Body Type                                          | [[PCARGTYP]]       |
| Hazardous Material Involvement                           | [[PHAZ_INV]]       |
| Hazardous Material Placard                               | [[PHAZPLAC]]       |
| Hazardous Material Identification Number                 | [[PHAZ_ID]]        |
| Hazardous Material Class Number                          | [[PHAZ_CNO]]       |
| Release of Hazardous Material from the Cargo Compartment | [[PHAZ_REL]]       |
| Bus Use                                                  | [[PBUS_USE]]       |
| Special Use                                              | [[PSP_USE]]        |
| Emergency Motor Vehicle Use                              | [[PEM_USE]]        |
| Vehicle Underride/Override                               | [[PUNDEROVERRIDE]] |
| Area of Impact – Initial Contact Point                   | [[PIMPACT1]]       |
| Extent of Damage                                         | [[PVEH_SEV]]       |
| Vehicle Towed                                            | [[PTOWED]]         |
| Most Harmful Event                                       | [[PM_HARM]]        |
| Fire Occurrence                                          | [[PFIRE]]          |
| NCSA Make Model Combined                                 | [[PMAK_MOD]]       |
| VIN Character 1                                          | [[PVIN_1]]         |
| VIN Character 2                                          | [[PVIN_2]]         |
| VIN Character 3                                          | [[PVIN_3]]         |
| VIN Character 4                                          | [[PVIN_4]]         |
| VIN Character 5                                          | [[PVIN_5]]         |
| VIN Character 6                                          | [[PVIN_6]]         |
| VIN Character 7                                          | [[PVIN_7]]         |
| VIN Character 8                                          | [[PVIN_8]]         |
| VIN Character 9                                          | [[PVIN_9]]         |
| VIN Character 10                                         | [[PVIN_10]]        |
| VIN Character 11                                         | [[PVIN_11]]        |
| VIN Character 12                                         | [[PVIN_12]]        |
| Fatalities in Vehicle                                    | [[PDEATHS]]        |
