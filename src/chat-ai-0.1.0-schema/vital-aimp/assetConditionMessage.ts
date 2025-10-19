import { AssetMessage } from './assetMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AssetConditionMessage
 */
export class AssetConditionMessage extends AssetMessage {
  public humidity?: number;
  public temperature?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AssetConditionMessage';
  }

  /**
   * Get property definitions for AssetConditionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasHumidity',
        tsPropertyName: 'humidity',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTemperature',
        tsPropertyName: 'temperature',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
