import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherType
 */
export class HaleyWeatherType extends VITAL_Node {
  public weatherTypeLargeIconPath?: string;
  public weatherTypeIndex?: number;
  public weatherTypeDescriptor?: string;
  public weatherTypeSmallIconPath?: string;
  public weatherTypeMediumIconPath?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyWeatherType';
  }

  /**
   * Get property definitions for HaleyWeatherType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeLargeIconPath',
        tsPropertyName: 'weatherTypeLargeIconPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeIndex',
        tsPropertyName: 'weatherTypeIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeDescriptor',
        tsPropertyName: 'weatherTypeDescriptor',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeSmallIconPath',
        tsPropertyName: 'weatherTypeSmallIconPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasWeatherTypeMediumIconPath',
        tsPropertyName: 'weatherTypeMediumIconPath',
        type: 'string',
        required: false
      }
    ];
  }


}
