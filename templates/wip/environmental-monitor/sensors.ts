// https://api.purpleair.com/v1/sensors/53?fields=name,icon,model,hardware,location_type,private,latitude,longitude,altitude,position_rating,led_brightness,firmware_version,firmware_upgrade,rssi,uptime,pa_latency,memory,last_seen,last_modified,date_created,channel_state,channel_flags,channel_flags_manual,channel_flags_auto,confidence,confidence_manual,confidence_auto,humidity,humidity_a,humidity_b,temperature,temperature_a,temperature_b,pressure,pressure_a,pressure_b,voc,voc_a,voc_b,ozone1,analog_input,pm1.0,pm1.0_a,pm1.0_b,pm1.0_atm,pm1.0_atm_a,pm1.0_atm_b,pm1.0_cf_1,pm1.0_cf_1_a,pm1.0_cf_1_b,pm2.5_alt,pm2.5_alt_a,pm2.5_alt_b,pm2.5,pm2.5_a,pm2.5_b,pm2.5_atm,pm2.5_atm_a,pm2.5_atm_b,pm2.5_cf_1,pm2.5_cf_1_a,pm2.5_cf_1_b,pm2.5_10minute,pm2.5_10minute_a,pm2.5_10minute_b,pm2.5_30minute,pm2.5_30minute_a,pm2.5_30minute_b,pm2.5_60minute,pm2.5_60minute_a,pm2.5_60minute_b,pm2.5_6hour,pm2.5_6hour_a,pm2.5_6hour_b,pm2.5_24hour,pm2.5_24hour_a,pm2.5_24hour_b,pm2.5_1week,pm2.5_1week_a,pm2.5_1week_b,pm10.0,pm10.0_a,pm10.0_b,pm10.0_atm,pm10.0_atm_a,pm10.0_atm_b,pm10.0_cf_1,pm10.0_cf_1_a,pm10.0_cf_1_b,0.3_um_count,0.3_um_count_a,0.3_um_count_b,0.5_um_count,0.5_um_count_a,0.5_um_count_b,1.0_um_count,1.0_um_count_a,1.0_um_count_b,2.5_um_count,2.5_um_count_a,2.5_um_count_b,5.0_um_count,5.0_um_count_a,5.0_um_count_b,10.0_um_count,10.0_um_count_a,10.0_um_count_b,primary_id_a,primary_key_a,secondary_id_a,secondary_key_a,primary_id_b,primary_key_b,secondary_id_b,secondary_key_b

import { z } from "netzo/deps/zod/mod.ts";

// schemas:

export const sensorSchema = z.object({
  api_version: z.string(),
  time_stamp: z.number(),
  data_time_stamp: z.number(),
  sensor: z.object({
    sensor_index: z.number(),
    last_modified: z.number(),
    date_created: z.number(),
    last_seen: z.number(),
    private: z.number(),
    name: z.string(),
    icon: z.number(),
    location_type: z.number(),
    model: z.string(),
    hardware: z.string(),
    led_brightness: z.number(),
    firmware_version: z.string(),
    rssi: z.number(),
    uptime: z.number(),
    pa_latency: z.number(),
    memory: z.number(),
    position_rating: z.number(),
    latitude: z.number(),
    longitude: z.number(),
    channel_state: z.number(),
    channel_flags: z.number(),
    channel_flags_manual: z.number(),
    channel_flags_auto: z.number(),
    confidence: z.number(),
    analog_input: z.number(),
    "pm1.0": z.number(),
    "pm1.0_a": z.number(),
    "pm2.5": z.number(),
    "pm2.5_a": z.number(),
    "pm2.5_alt": z.number(),
    "pm2.5_alt_a": z.number(),
    "pm10.0": z.number(),
    "pm10.0_a": z.number(),
    "0.3_um_count": z.number(),
    "0.3_um_count_a": z.number(),
    "0.5_um_count": z.number(),
    "0.5_um_count_a": z.number(),
    "1.0_um_count": z.number(),
    "1.0_um_count_a": z.number(),
    "2.5_um_count": z.number(),
    "2.5_um_count_a": z.number(),
    "5.0_um_count": z.number(),
    "5.0_um_count_a": z.number(),
    "10.0_um_count": z.number(),
    "10.0_um_count_a": z.number(),
    "pm1.0_cf_1": z.number(),
    "pm1.0_cf_1_a": z.number(),
    "pm1.0_atm": z.number(),
    "pm1.0_atm_a": z.number(),
    "pm2.5_atm": z.number(),
    "pm2.5_atm_a": z.number(),
    "pm2.5_cf_1": z.number(),
    "pm2.5_cf_1_a": z.number(),
    "pm10.0_atm": z.number(),
    "pm10.0_atm_a": z.number(),
    "pm10.0_cf_1": z.number(),
    "pm10.0_cf_1_a": z.number(),
    primary_id_a: z.number(),
    primary_key_a: z.string(),
    primary_id_b: z.number(),
    primary_key_b: z.string(),
    secondary_id_a: z.number(),
    secondary_key_a: z.string(),
    secondary_id_b: z.number(),
    secondary_key_b: z.string(),
    stats: z.object({
      "pm2.5": z.number(),
      "pm2.5_10minute": z.number(),
      "pm2.5_30minute": z.number(),
      "pm2.5_60minute": z.number(),
      "pm2.5_6hour": z.number(),
      "pm2.5_24hour": z.number(),
      "pm2.5_1week": z.number(),
      time_stamp: z.number()
    }),
    stats_a: z.object({
      "pm2.5": z.number(),
      "pm2.5_10minute": z.number(),
      "pm2.5_30minute": z.number(),
      "pm2.5_60minute": z.number(),
      "pm2.5_6hour": z.number(),
      "pm2.5_24hour": z.number(),
      "pm2.5_1week": z.number(),
      time_stamp: z.number()
    })
  })
})


// types:

export type Sensor = z.infer<typeof sensorSchema>;

// data:

export const sensors: Sensor[] = [
  {
    "api_version": "V1.0.11-0.0.49",
    "time_stamp": 1705163142,
    "data_time_stamp": 1705163087,
    "sensor": {
      "sensor_index": 53,
      "last_modified": 1520025982,
      "date_created": 1454548891,
      "last_seen": 1705163032,
      "private": 0,
      "name": "Lakeshore",
      "icon": 0,
      "location_type": 0,
      "model": "UNKNOWN",
      "hardware": "1.0+1M+PMSX003-O",
      "led_brightness": 25,
      "firmware_version": "6.06b",
      "rssi": -36,
      "uptime": 12986,
      "pa_latency": 352,
      "memory": 16368,
      "position_rating": 5,
      "latitude": 40.246742,
      "longitude": -111.7048,
      "channel_state": 1,
      "channel_flags": 0,
      "channel_flags_manual": 0,
      "channel_flags_auto": 0,
      "confidence": 30,
      "analog_input": 0.0,
      "pm1.0": 0.0,
      "pm1.0_a": 0.0,
      "pm2.5": 0.0,
      "pm2.5_a": 0.0,
      "pm2.5_alt": 1.5,
      "pm2.5_alt_a": 1.5,
      "pm10.0": 0.0,
      "pm10.0_a": 0.0,
      "0.3_um_count": 1295,
      "0.3_um_count_a": 1295,
      "0.5_um_count": 70,
      "0.5_um_count_a": 70,
      "1.0_um_count": 0,
      "1.0_um_count_a": 0,
      "2.5_um_count": 0,
      "2.5_um_count_a": 0,
      "5.0_um_count": 0,
      "5.0_um_count_a": 0,
      "10.0_um_count": 0,
      "10.0_um_count_a": 0,
      "pm1.0_cf_1": 0.0,
      "pm1.0_cf_1_a": 0.0,
      "pm1.0_atm": 0.0,
      "pm1.0_atm_a": 0.0,
      "pm2.5_atm": 0.0,
      "pm2.5_atm_a": 0.0,
      "pm2.5_cf_1": 0.0,
      "pm2.5_cf_1_a": 0.0,
      "pm10.0_atm": 0.0,
      "pm10.0_atm_a": 0.0,
      "pm10.0_cf_1": 0.0,
      "pm10.0_cf_1_a": 0.0,
      "primary_id_a": 84144,
      "primary_key_a": "DYBYPI2LSK4QGFNM",
      "primary_id_b": 725391,
      "primary_key_b": "DGNHAFD7NZV9H2RZ",
      "secondary_id_a": 84145,
      "secondary_key_a": "ITY12CRN3H8KPBJY",
      "secondary_id_b": 725392,
      "secondary_key_b": "EB6SJL8KOR7K7WCA",
      "stats": {
        "pm2.5": 0.0,
        "pm2.5_10minute": 0.0,
        "pm2.5_30minute": 0.0,
        "pm2.5_60minute": 0.0,
        "pm2.5_6hour": 0.5,
        "pm2.5_24hour": 0.5,
        "pm2.5_1week": 0.5,
        "time_stamp": 1705163032
      },
      "stats_a": {
        "pm2.5": 0.0,
        "pm2.5_10minute": 0.0,
        "pm2.5_30minute": 0.0,
        "pm2.5_60minute": 0.0,
        "pm2.5_6hour": 0.5,
        "pm2.5_24hour": 0.5,
        "pm2.5_1week": 0.5,
        "time_stamp": 1705163032
      }
    }
  },
  {
    "api_version": "V1.0.11-0.0.49",
    "time_stamp": 1705163387,
    "data_time_stamp": 1705163372,
    "sensor": {
      "sensor_index": 33117,
      "last_modified": 1574442119,
      "date_created": 1560278900,
      "last_seen": 1705163275,
      "private": 0,
      "name": "Liceo de Monterrey",
      "icon": 0,
      "location_type": 0,
      "model": "PA-II",
      "hardware": "2.0+BME280+PMSX003-B+PMSX003-A",
      "led_brightness": 35,
      "firmware_version": "7.02",
      "rssi": -63,
      "uptime": 40388,
      "pa_latency": 483,
      "memory": 15448,
      "position_rating": 5,
      "latitude": 25.650322,
      "longitude": -100.32849,
      "altitude": 2034,
      "channel_state": 3,
      "channel_flags": 0,
      "channel_flags_manual": 0,
      "channel_flags_auto": 0,
      "confidence": 100,
      "confidence_auto": 100,
      "confidence_manual": 100,
      "humidity": 24,
      "humidity_a": 24,
      "temperature": 62,
      "temperature_a": 62,
      "pressure": 947.29,
      "pressure_a": 947.29,
      "analog_input": 0.02,
      "pm1.0": 9.8,
      "pm1.0_a": 10.4,
      "pm1.0_b": 9.2,
      "pm2.5": 15.1,
      "pm2.5_a": 15.5,
      "pm2.5_b": 14.8,
      "pm2.5_alt": 9.1,
      "pm2.5_alt_a": 9.4,
      "pm2.5_alt_b": 8.8,
      "pm10.0": 19.4,
      "pm10.0_a": 22.6,
      "pm10.0_b": 16.3,
      "0.3_um_count": 1995,
      "0.3_um_count_a": 2316,
      "0.3_um_count_b": 1674,
      "0.5_um_count": 518,
      "0.5_um_count_a": 561,
      "0.5_um_count_b": 475,
      "1.0_um_count": 102,
      "1.0_um_count_a": 103,
      "1.0_um_count_b": 102,
      "2.5_um_count": 15,
      "2.5_um_count_a": 19,
      "2.5_um_count_b": 12,
      "5.0_um_count": 5,
      "5.0_um_count_a": 10,
      "5.0_um_count_b": 1,
      "10.0_um_count": 1,
      "10.0_um_count_a": 2,
      "10.0_um_count_b": 0,
      "pm1.0_cf_1": 9.8,
      "pm1.0_cf_1_a": 10.38,
      "pm1.0_cf_1_b": 9.22,
      "pm1.0_atm": 9.8,
      "pm1.0_atm_a": 10.38,
      "pm1.0_atm_b": 9.22,
      "pm2.5_atm": 15.1,
      "pm2.5_atm_a": 15.48,
      "pm2.5_atm_b": 14.75,
      "pm2.5_cf_1": 15.1,
      "pm2.5_cf_1_a": 15.48,
      "pm2.5_cf_1_b": 14.75,
      "pm10.0_atm": 19.4,
      "pm10.0_atm_a": 22.57,
      "pm10.0_atm_b": 16.27,
      "pm10.0_cf_1": 19.4,
      "pm10.0_cf_1_a": 22.57,
      "pm10.0_cf_1_b": 16.27,
      "primary_id_a": 799393,
      "primary_key_a": "J3TYA7GYBHO0LMRE",
      "primary_id_b": 799418,
      "primary_key_b": "O3XYXTYRS1XBODJE",
      "secondary_id_a": 799409,
      "secondary_key_a": "G87GTNUZO6Z1OOD2",
      "secondary_id_b": 799425,
      "secondary_key_b": "7VIWKOKEWAUJTQ6K",
      "stats": {
        "pm2.5": 15.1,
        "pm2.5_10minute": 17.7,
        "pm2.5_30minute": 16.0,
        "pm2.5_60minute": 13.4,
        "pm2.5_6hour": 9.6,
        "pm2.5_24hour": 13.1,
        "pm2.5_1week": 21.8,
        "time_stamp": 1705163275
      },
      "stats_a": {
        "pm2.5": 15.5,
        "pm2.5_10minute": 18.4,
        "pm2.5_30minute": 16.6,
        "pm2.5_60minute": 14.1,
        "pm2.5_6hour": 10.1,
        "pm2.5_24hour": 13.6,
        "pm2.5_1week": 22.3,
        "time_stamp": 1705163275
      },
      "stats_b": {
        "pm2.5": 14.8,
        "pm2.5_10minute": 17.0,
        "pm2.5_30minute": 15.3,
        "pm2.5_60minute": 12.8,
        "pm2.5_6hour": 9.1,
        "pm2.5_24hour": 12.7,
        "pm2.5_1week": 21.4,
        "time_stamp": 1705163275
      }
    }
  }
];

// i18n keys: for schema keys in spanish (español), primera letra siempre mayuscula

export const ALIASES = {
  es: {
    api_version: "Versión de API",
    time_stamp: "Fecha de consulta",
    data_time_stamp: "Fecha de datos",
    sensor: "Sensor",
    sensor_index: "Índice de sensor",
    last_modified: "Última modificación",
    date_created: "Fecha de creación",
    last_seen: "Última conexión",
    private: "Privado",
    name: "Nombre",
    icon: "Icono",
    location_type: "Tipo de ubicación",
    model: "Modelo",
    hardware: "Hardware",
    led_brightness: "Brillo del LED",
    firmware_version: "Versión de firmware",
    rssi: "RSSI",
    uptime: "Tiempo de actividad",
    pa_latency: "Latencia de PA",
    memory: "Memoria",
    position_rating: "Calificación de posición",
    latitude: "Latitud",
    longitude: "Longitud",
    altitude: "Altitud",
    channel_state: "Estado del canal",
    channel_flags: "Banderas de canal",
    channel_flags_manual: "Banderas de canal manual",
    channel_flags_auto: "Banderas de canal automático",
    confidence: "Confianza",
    confidence_auto: "Confianza automática",
    confidence_manual: "Confianza manual",
    humidity: "Humedad",
    humidity_a: "Humedad A",
    humidity_b: "Humedad B",
    temperature: "Temperatura",
    temperature_a: "Temperatura A",
    temperature_b: "Temperatura B",
    pressure: "Presión",
    pressure_a: "Presión A",
    pressure_b: "Presión B",
    analog_input: "Entrada analógica",
    "pm1.0": "PM1.0",
    "pm1.0_a": "PM1.0 A",
    "pm1.0_b": "PM1.0 B",
    "pm2.5": "PM2.5",
    "pm2.5_a": "PM2.5 A",
    "pm2.5_b": "PM2.5 B",
    "pm2.5_alt": "PM2.5 Alt",
    "pm2.5_alt_a": "PM2.5 Alt A",
    "pm2.5_alt_b": "PM2.5 Alt B",
    "pm10.0": "PM10.0",
    "pm10.0_a": "PM10.0 A",
    "pm10.0_b": "PM10.0 B",
    "0.3_um_count": "0.3 um",
    "0.3_um_count_a": "0.3 um A",
    "0.3_um_count_b": "0.3 um B",
    "0.5_um_count": "0.5 um",
    "0.5_um_count_a": "0.5 um A",
    "0.5_um_count_b": "0.5 um B",
    "1.0_um_count": "1.0 um",
    "1.0_um_count_a": "1.0 um A",
    "1.0_um_count_b": "1.0 um B",
    "2.5_um_count": "2.5 um",
    "2.5_um_count_a": "2.5 um A",
    "2.5_um_count_b": "2.5 um B",
    "5.0_um_count": "5.0 um",
    "5.0_um_count_a": "5.0 um A",
    "5.0_um_count_b": "5.0 um B",
    "10.0_um_count": "10.0 um",
    "10.0_um_count_a": "10.0 um A",
    "10.0_um_count_b": "10.0 um B",
    "pm1.0_cf_1": "PM1.0 CF=1",
    "pm1.0_cf_1_a": "PM1.0 CF=1 A",
    "pm1.0_cf_1_b": "PM1.0 CF=1 B",
    "pm1.0_atm": "PM1.0 ATM",
    "pm1.0_atm_a": "PM1.0 ATM A",
    "pm1.0_atm_b": "PM1.0 ATM B",
    "pm2.5_atm": "PM2.5 ATM",
    "pm2.5_atm_a": "PM2.5 ATM A",
    "pm2.5_atm_b": "PM2.5 ATM B",
    "pm2.5_cf_1": "PM2.5 CF=1",
    "pm2.5_cf_1_a": "PM2.5 CF=1 A",
    "pm2.5_cf_1_b": "PM2.5 CF=1 B",
    "pm10.0_atm": "PM10.0 ATM",
    "pm10.0_atm_a": "PM10.0 ATM A",
    "pm10.0_atm_b": "PM10.0 ATM B",
    "pm10.0_cf_1": "PM10.0 CF=1",
    "pm10.0_cf_1_a": "PM10.0 CF=1 A",
    "pm10.0_cf_1_b": "PM10.0 CF=1 B",
    primary_id_a: "ID primario A",
    primary_key_a: "Clave primaria A",
    primary_id_b: "ID primario B",
    primary_key_b: "Clave primaria B",
    secondary_id_a: "ID secundario A",
    secondary_key_a: "Clave secundaria A",
    secondary_id_b: "ID secundario B",
    secondary_key_b: "Clave secundaria B",
    stats: "Estadísticas",
    stats_a: "Estadísticas A"
  },
  en: {
    api_version: "API Version",
    time_stamp: "Query Date",
    data_time_stamp: "Data Date",
    sensor: "Sensor",
    sensor_index: "Sensor Index",
    last_modified: "Last Modified",
    date_created: "Date Created",
    last_seen: "Last Seen",
    private: "Private",
    name: "Name",
    icon: "Icon",
    location_type: "Location Type",
    model: "Model",
    hardware: "Hardware",
    led_brightness: "LED Brightness",
    firmware_version: "Firmware Version",
    rssi: "RSSI",
    uptime: "Uptime",
    pa_latency: "PA Latency",
    memory: "Memory",
    position_rating: "Position Rating",
    latitude: "Latitude",
    longitude: "Longitude",
    altitude: "Altitude",
    channel_state: "Channel State",
    channel_flags: "Channel Flags",
    channel_flags_manual: "Channel Flags Manual",
    channel_flags_auto: "Channel Flags Auto",
    confidence: "Confidence",
    confidence_auto: "Confidence Auto",
    confidence_manual: "Confidence Manual",
    humidity: "Humidity",
    humidity_a: "Humidity A",
    humidity_b: "Humidity B",
    temperature: "Temperature",
    temperature_a: "Temperature A",
    temperature_b: "Temperature B",
    pressure: "Pressure",
    pressure_a: "Pressure A",
    pressure_b: "Pressure B",
    analog_input: "Analog Input",
    "pm1.0": "PM1.0",
    "pm1.0_a": "PM1.0 A",
    "pm1.0_b": "PM1.0 B",
    "pm2.5": "PM2.5",
    "pm2.5_a": "PM2.5 A",
    "pm2.5_b": "PM2.5 B",
    "pm2.5_alt": "PM2.5 Alt",
    "pm2.5_alt_a": "PM2.5 Alt A",
    "pm2.5_alt_b": "PM2.5 Alt B",
    "pm10.0": "PM10.0",
    "pm10.0_a": "PM10.0 A",
    "pm10.0_b": "PM10.0 B",
    "0.3_um_count": "0.3 um",
    "0.3_um_count_a": "0.3 um A",
    "0.3_um_count_b": "0.3 um B",
    "0.5_um_count": "0.5 um",
    "0.5_um_count_a": "0.5 um A",
    "0.5_um_count_b": "0.5 um B",
    "1.0_um_count": "1.0 um",
    "1.0_um_count_a": "1.0 um A",
    "1.0_um_count_b": "1.0 um B",
    "2.5_um_count": "2.5 um",
    "2.5_um_count_a": "2.5 um A",
    "2.5_um_count_b": "2.5 um B",
    "5.0_um_count": "5.0 um",
    "5.0_um_count_a": "5.0 um A",
    "5.0_um_count_b": "5.0 um B",
    "10.0_um_count": "10.0 um",
    "10.0_um_count_a": "10.0 um A",
    "10.0_um_count_b": "10.0 um B",
    "pm1.0_cf_1": "PM1.0 CF=1",
    "pm1.0_cf_1_a": "PM1.0 CF=1 A",
    "pm1.0_cf_1_b": "PM1.0 CF=1 B",
    "pm1.0_atm": "PM1.0 ATM",
    "pm1.0_atm_a": "PM1.0 ATM A",
    "pm1.0_atm_b": "PM1.0 ATM B",
    "pm2.5_atm": "PM2.5 ATM",
    "pm2.5_atm_a": "PM2.5 ATM A",
    "pm2.5_atm_b": "PM2.5 ATM B",
    "pm2.5_cf_1": "PM2.5 CF=1",
    "pm2.5_cf_1_a": "PM2.5 CF=1 A",
    "pm2.5_cf_1_b": "PM2.5 CF=1 B",
    "pm10.0_atm": "PM10.0 ATM",
    "pm10.0_atm_a": "PM10.0 ATM A",
    "pm10.0_atm_b": "PM10.0 ATM B",
    "pm10.0_cf_1": "PM10.0 CF=1",
    "pm10.0_cf_1_a": "PM10.0 CF=1 A",
    "pm10.0_cf_1_b": "PM10.0 CF=1 B",
    primary_id_a: "Primary ID A",
    primary_key_a: "Primary Key A",
    primary_id_b: "Primary ID B",
    primary_key_b: "Primary Key B",
    secondary_id_a: "Secondary ID A",
    secondary_key_a: "Secondary Key A",
    secondary_id_b: "Secondary ID B",
    secondary_key_b: "Secondary Key B",
    stats: "Stats",
    stats_a: "Stats A"
  }
};

export const DEFINITIONS = {
  es: {
    sensor_index: "El índice del sensor. Puede usarse para agregar un sensor a un grupo o ver sus detalles.",
    icon: "Una bandera reservada para uso futuro para hacer referencia a un icono para el sensor.",
    name: "El nombre dado al sensor desde el formulario de registro y utilizado en el mapa de PA.",
    private: "Una bandera que indica el estado privado del sensor. Los valores posibles son: 0 = público o 1 = privado",
    location_type: "El tipo de ubicación. Los valores posibles son: 0 = Exterior o 1 = Interior.",
    latitude: "El valor de posición de latitud para el sensor.",
    longitude: "El valor de posición de longitud para el sensor.",
    altitude: "La altitud para la ubicación del sensor en pies.",
    position_rating: "Una calificación de 'estrella' de precisión de posición. 0 estrellas no está cerca de la ubicación reclamada, mientras que 5 estrellas está cerca de la ubicación del mapa según los valores de latitud y longitud.",
    hardware: "Los sensores y otro hardware que fue detectado por el firmware.",
    firmware_version: "La última versión de firmware conocida en el dispositivo.",
    rssi: "La fuerza de la señal WiFi.",
    uptime: "El tiempo en minutos desde que se inició el firmware, según lo informado por el sensor.",
    pa_latency: "El tiempo que tarda en enviar datos a los servidores de PurpleAir en milisegundos.",
    memory: "Memoria HEAP libre en Kb.",
    last_modified: "La marca de tiempo UNIX desde la última vez que el formulario de registro modificó el dispositivo.",
    date_created: "La marca de tiempo UNIX desde que se creó el dispositivo.",
    stats: "Estadísticas promedio seudo para el canal como promedio de canal A y canal B excluyendo canales degradados (ver objeto de estadísticas de datos del sensor a continuación).",
    stats_a: "Estadísticas promedio seudo para el canal (ver objeto de estadísticas de datos del sensor a continuación).",
    stats_b: "Estadísticas promedio seudo para el canal (ver objeto de estadísticas de datos del sensor a continuación).",
    humidity: "Humedad relativa dentro de la carcasa del sensor (%). En promedio, esto es 4% menor que las condiciones ambientales. Nulo si no está equipado.",
    humidity_a: "Humedad A",
    humidity_b: "Humedad B",
    temperature: "Temperatura dentro de la carcasa del sensor (F). En promedio, esto es 8F más alto que las condiciones ambientales. Nulo si no está equipado.",
    temperature_a: "Temperatura A",
    temperature_b: "Temperatura B",
    pressure: "Presión actual en milibares.",
    pressure_a: "Presión A",
    pressure_b: "Presión B",
    voc: "Concentración de VOC (IAQ) en unidades estáticas iaq de Bosch según la hoja de datos de BME680, EXPERIMENTAL. Nulo si no está equipado.",
    voc_a: "VOC A",
    voc_b: "VOC B",
    ozone1: "Concentración de ozono (PPB) Nulo si no está equipado.",
    scattering_coefficient: "Dispersión de luz de partículas finas: la interacción de la luz con la materia particulada fina hace que la luz se redirija de su camino. Al mirar una escena, la niebla se debe en parte a que la luz que emana de los elementos escénicos se dispersa fuera de la trayectoria de la vista y la luz aleatoria (luz del aire) se dispersa en la trayectoria de la vista. Ver, http://vista.cira.colostate.edu/Improve/visibility-basics/.",
    scattering_coefficient_a: "Coeficiente de dispersión A",
    scattering_coefficient_b: "Coeficiente de dispersión B",
    deciviews: "Un índice de bruma relacionado con la dispersión y extinción de la luz que está aproximadamente linealmente relacionado con la percepción humana de la bruma. Ver, http://vista.cira.colostate.edu/Improve/visibility-basics/.",
    deciviews_a: "Deciviews A",
    deciviews_b: "Deciviews B",
    visual_range: "A menudo denominada visibilidad, el alcance visual es la distancia desde el observador que un objeto oscuro grande, por ejemplo, la cima de una montaña o un edificio grande, desaparece de la vista.",
    visual_range_a: "Alcance visual A",
    visual_range_b: "Alcance visual B",
    analog_input: "Si algo está conectado a él, el voltaje analógico en la entrada ADC de la placa de control del sensor PurpleAir.",
    primary_id_a: "ID de canal ThingSpeak para almacenar valores de sensor",
    primary_key_a: "Clave de lectura de ThingSpeak utilizada para acceder a los datos del canal",
    secondary_id_a: "ID de canal ThingSpeak para almacenar valores de sensor",
    secondary_key_a: "Clave de lectura de ThingSpeak utilizada para acceder a los datos del canal",
    primary_id_b: "ID de canal ThingSpeak para almacenar valores de sensor",
    primary_key_b: "Clave de lectura de ThingSpeak utilizada para acceder a los datos del canal",
    secondary_id_b: "ID de canal ThingSpeak para almacenar valores de sensor",
    secondary_key_b: "Clave de lectura de ThingSpeak utilizada para acceder a los datos del canal",
    pm2_5: "Concentración de masa estimada PM2.5 (ug / m3). PM2.5 son partículas finas con un diámetro de menos de 2.5 micras.",
    pm2_5_10minute: "Promedio seudo (estimado) de 10 minutos para PM2.5",
    pm2_5_30minute: "Promedio seudo (estimado) de 30 minutos para PM2.5",
    pm2_5_60minute: "Promedio seudo (estimado) de 60 minutos para PM2.5",
    pm2_5_6hour: "Promedio seudo (estimado) de 6 horas para PM2.5",
    pm2_5_24hour: "Promedio seudo (estimado) de 24 horas para PM2.5",
    pm2_5_1week: "Promedio seudo (estimado) de 1 semana para PM2.5",
    time_stamp: "La marca de tiempo UNIX del servidor desde que se recibieron datos para este canal."
  },
  en: {
    sensor_index: "The sensor's index. Can be used to add a sensor to a group or view it's details.",
    icon: "A flag reserved for future use to reference an icon for the sensor.",
    name: "The name given to the sensor from the registration form and used on the PA map.",
    private: "A flag indicating the private status of the sensor. Possible values are: 0 = public or 1 = private",
    location_type: "The location type. Possible values are: 0 = Outside or 1 = Inside.",
    latitude: "The latitude position value for the sensor.",
    longitude: "The longitude position value for the sensor.",
    altitude: "The altitude for the sensor's location in feet.",
    position_rating: "A 'star' rating of position accuracy. 0 stars is nowhere near the claimed location whereas 5 stars is close to the map location as indicated by the latitude and longitude values.",
    hardware: "The sensors and other hardware that was detected by the firmware.",
    firmware_version: "The last known firmware version on the device.",
    rssi: "The WiFi signal strength.",
    uptime: "The time in minutes since the firmware started as last reported by the sensor.",
    pa_latency: "The time taken to send data to the PurpleAir servers in milliseconds.",
    memory: "Free HEAP memory in Kb.",
    last_modified: "The UNIX time stamp from the last time the device was modified by the registration form.",
    date_created: "The UNIX time stamp from when the device was created.",
    stats: "Pseudo average statistics for the channel as an everage of channel A and channel B excluding downgraded channels (see Sensor data stats object below).",
    stats_a: "Pseudo average statistics for the channel (see Sensor data stats object below).",
    stats_b: "Pseudo average statistics for the channel (see Sensor data stats object below).",
    humidity: "Relative humidity inside of the sensor housing (%). On average, this is 4% lower than ambient conditions. Null if not equipped.",
    humidity_a: "Humidity A",
    humidity_b: "Humidity B",
    temperature: "Temperature inside of the sensor housing (F). On average, this is 8F higher than ambient conditions. Null if not equipped.",
    temperature_a: "Temperature A",
    temperature_b: "Temperature B",
    pressure: "Current pressure in Millibars.",
    pressure_a: "Pressure A",
    pressure_b: "Pressure B",
    voc: "VOC concentration (IAQ) in Bosch static iaq units as per BME680 spec sheet, EXPERIMENTAL. Null if not equipped.",
    voc_a: "VOC A",
    voc_b: "VOC B",
    ozone1: "Ozone concentration (PPB) Null if not equipped.",
    scattering_coefficient: "Fine Particulate Light Scattering: The interaction of light with fine particulate matter causing the light to be redirected from its path. When looking at a scene, haze is partially due to light emanating from the scenic elements being scattered out of the sight path and random light (air light) being scattering into the sight path. See, http://vista.cira.colostate.edu/Improve/visibility-basics/.",
    scattering_coefficient_a: "Scattering Coefficient A",
    scattering_coefficient_b: "Scattering Coefficient B",
    deciviews: "A haze index related to light scattering and extinction that is approximately linearly related to human perception of the haze. See, http://vista.cira.colostate.edu/Improve/visibility-basics/.",
    deciviews_a: "Deciviews A",
    deciviews_b: "Deciviews B",
    visual_range: "Often referred to as visibility, visual range is the distance from the observer that a large dark object, e.g. a mountain top or large building, just disappears from view.",
    visual_range_a: "Visual Range A",
    visual_range_b: "Visual Range B",
    analog_input: "If anything is connected to it, the analog voltage on ADC input of the PurpleAir sensor control board.",
    primary_id_a: "ThingSpeak channel ID for storing sensor values",
    primary_key_a: "ThingSpeak read key used for accessing data for the channel",
    secondary_id_a: "ThingSpeak channel ID for storing sensor values",
    secondary_key_a: "ThingSpeak read key used for accessing data for the channel",
    primary_id_b: "ThingSpeak channel ID for storing sensor values",
    primary_key_b: "ThingSpeak read key used for accessing data for the channel",
    secondary_id_b: "ThingSpeak channel ID for storing sensor values",
    secondary_key_b: "ThingSpeak read key used for accessing data for the channel",
    pm2_5: "Estimated mass concentration PM2.5 (ug/m3). PM2.5 are fine particulates with a diameter of fewer than 2.5 microns.",
    pm2_5_10minute: "10 minute pseudo (estimated) average for PM2.5",
    pm2_5_30minute: "30 minute pseudo (estimated) average for PM2.5",
    pm2_5_60minute: "60 minute pseudo (estimated) average for PM2.5",
    pm2_5_6hour: "6 Hour pseudo (estimated) average for PM2.5",
    pm2_5_24hour: "24 hour pseudo (estimated) average for PM2.5",
    pm2_5_1week: "1 week pseudo (estimated) average for PM2.5",
    time_stamp: "The servers UTC (Unix) time stamp from when data was received for this channel."
  }
}
