import { AssetMessage } from './assetMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AssetLocationMessage
 */
export class AssetLocationMessage extends AssetMessage {
  public location?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AssetLocationMessage';
  }

  /**
   * Get property definitions for AssetLocationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocation',
        tsPropertyName: 'location',
        type: 'string',
        required: false
      }
    ];
  }


}
