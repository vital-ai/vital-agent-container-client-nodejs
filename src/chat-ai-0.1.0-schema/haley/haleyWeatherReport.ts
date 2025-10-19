import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherReport
 */
export class HaleyWeatherReport extends VITAL_Node {
  public weatherHumidity?: number;
  public haleyWeatherWindCompassDirectionURI?: string;
  public weatherWindChill?: number;
  public weatherMoonRise?: string | Date;
  public weatherReportSummary?: string;
  public weatherFeelsLikeTemperature?: number;
  public weatherPrecipitationType?: string;
  public weatherReportJSON?: string;
  public weatherReportHistorical?: boolean;
  public haleyWeatherMoonPhaseURI?: string;
  public weatherReportTimeZoneIdentifier?: string;
  public weatherReportUnits?: string;
  public weatherSunrise?: string | Date;
  public weatherReportDateTime?: string | Date;
  public airQualityUltraVioletIndex?: number;
  public weatherReportIconInteger?: number;
  public weatherReportIcon?: string;
  public windAngle?: number;
  public weatherPrecipitationTotal?: number;
  public windDirection?: string;
  public weatherAirPressure?: number;
  public weatherVisibility?: number;
  public weatherSunset?: string | Date;
  public weatherReportLongitude?: number;
  public airQualityOzone?: number;
  public windSpeed?: number;
  public weatherTemperature?: number;
  public weatherDewPoint?: number;
  public weatherReportLatitude?: number;
  public weatherCloudCover?: number;
  public weatherElevation?: number;
  public airQualityIrradiance?: number;
  public weatherMoonSet?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyWeatherReport';
  }

  /**
   * Get property definitions for HaleyWeatherReport
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherHumidity',
        tsPropertyName: 'weatherHumidity',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherWindCompassDirectionURI',
        tsPropertyName: 'haleyWeatherWindCompassDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherWindChill',
        tsPropertyName: 'weatherWindChill',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherMoonRise',
        tsPropertyName: 'weatherMoonRise',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportSummary',
        tsPropertyName: 'weatherReportSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherFeelsLikeTemperature',
        tsPropertyName: 'weatherFeelsLikeTemperature',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherPrecipitationType',
        tsPropertyName: 'weatherPrecipitationType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportJSON',
        tsPropertyName: 'weatherReportJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isWeatherReportHistorical',
        tsPropertyName: 'weatherReportHistorical',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherMoonPhaseURI',
        tsPropertyName: 'haleyWeatherMoonPhaseURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportTimeZoneIdentifier',
        tsPropertyName: 'weatherReportTimeZoneIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportUnits',
        tsPropertyName: 'weatherReportUnits',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherSunrise',
        tsPropertyName: 'weatherSunrise',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportDateTime',
        tsPropertyName: 'weatherReportDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAirQualityUltraVioletIndex',
        tsPropertyName: 'airQualityUltraVioletIndex',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportIconInteger',
        tsPropertyName: 'weatherReportIconInteger',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportIcon',
        tsPropertyName: 'weatherReportIcon',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWindAngle',
        tsPropertyName: 'windAngle',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherPrecipitationTotal',
        tsPropertyName: 'weatherPrecipitationTotal',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWindDirection',
        tsPropertyName: 'windDirection',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherAirPressure',
        tsPropertyName: 'weatherAirPressure',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherVisibility',
        tsPropertyName: 'weatherVisibility',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherSunset',
        tsPropertyName: 'weatherSunset',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportLongitude',
        tsPropertyName: 'weatherReportLongitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAirQualityOzone',
        tsPropertyName: 'airQualityOzone',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWindSpeed',
        tsPropertyName: 'windSpeed',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTemperature',
        tsPropertyName: 'weatherTemperature',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherDewPoint',
        tsPropertyName: 'weatherDewPoint',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherReportLatitude',
        tsPropertyName: 'weatherReportLatitude',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherCloudCover',
        tsPropertyName: 'weatherCloudCover',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherElevation',
        tsPropertyName: 'weatherElevation',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAirQualityIrradiance',
        tsPropertyName: 'airQualityIrradiance',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherMoonSet',
        tsPropertyName: 'weatherMoonSet',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
