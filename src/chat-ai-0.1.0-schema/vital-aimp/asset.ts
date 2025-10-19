import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Asset
 */
export class Asset extends VITAL_Node {
  public assetID?: string;
  public assetType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Asset';
  }

  /**
   * Get property definitions for Asset
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAssetID',
        tsPropertyName: 'assetID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAssetType',
        tsPropertyName: 'assetType',
        type: 'string',
        required: false
      }
    ];
  }


}
