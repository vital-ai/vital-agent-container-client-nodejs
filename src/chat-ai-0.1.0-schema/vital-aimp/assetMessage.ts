import { AIMPEvent } from './aimpevent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AssetMessage
 */
export class AssetMessage extends AIMPEvent {
  public assetURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AssetMessage';
  }

  /**
   * Get property definitions for AssetMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAssetURI',
        tsPropertyName: 'assetURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
