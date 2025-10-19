import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherDailyReport
 */
export class HaleyWeatherDailyReport extends VITAL_Node {
  public haleyWeatherWindCompassDirectionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyWeatherDailyReport';
  }

  /**
   * Get property definitions for HaleyWeatherDailyReport
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyWeatherWindCompassDirectionURI',
        tsPropertyName: 'haleyWeatherWindCompassDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
