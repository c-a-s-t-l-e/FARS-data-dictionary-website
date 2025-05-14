### **Purpose**

**PTRLR3VIN** records the VINs of up to **three trailers** attached to a **combination vehicle**. It does **not** include the VIN of the power unit (tractor).

---

### **Format**

- **Three sets** of **17 alphanumeric characters**
    
- SAS fields: `Vehicle.TRLR1VIN`, `Vehicle.TRLR2VIN`, `Vehicle.TRLR3VIN`, `PTRLR1VIN`, `PTRLT2VIN`, `PTRLT3VIN`
    
- **Left-justified**, no hyphens or periods included
    
- **VIN must follow** 49 CFR Part 565 standards
    

---

### **Element Codes & Meanings**

| Code                | Meaning                                        |
| ------------------- | ---------------------------------------------- |
| `00000000000000000` | No VIN required (not a road-use trailer)       |
| `77777777777777777` | No trailing units                              |
| `88888888888888888` | VIN not reported                               |
| `99999999999999999` | VIN reported as unknown                        |
| `*`                 | Character missing or not decipherable in a VIN |
| Alphanumeric string | Actual VIN (when known and valid)              |

---

### **Data Entry Logic**

- VIN fields auto-populate with `7s` if **VEHICLE TRAILING = 0, 5, 6, or 9**
    
- If `VEHICLE TRAILING = 1`, one VIN is recorded, others get `7s`
    
- If VIN is unknown or missing, use `8s` (Not Reported)
    
- VINs shorter than 17 characters:
    
    - Enter as-is if legitimate (e.g., for vintage/custom vehicles)
        
    - Use `*` to fill missing characters if appropriate
        

---

### **Special Cases**

- **Ford VINs (1950–1980)** with a script "f" at start/end: **omit the "f"**
    
- **Hyphens/periods** in VINs: **omit them**
    
- VINs with check digit errors can be overridden with justification
    

---

### **Validation & Error Checks**

The VIN must match expected character positions and formats. A variety of **edit checks** ensure:

- VIN consistency with the number of trailers
    
- VIN structure complies with CFR rules
    
- GVWR and VIN codes are compatible
    

For example:

- **VP79**: If `VEHICLE TRAILING = 1`, two VIN fields must equal `7s`
    
- **VP75**: If VIN = `0s`, GVWR must be `00`
    
- **904P/905P**: VIN characters must follow allowed alphanumeric ranges