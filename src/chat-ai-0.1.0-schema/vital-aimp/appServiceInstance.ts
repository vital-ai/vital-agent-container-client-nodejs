import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AppServiceInstance
 */
export class AppServiceInstance extends VITAL_Node {
  public appServiceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AppServiceInstance';
  }

  /**
   * Get property definitions for AppServiceInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAppServiceURI',
        tsPropertyName: 'appServiceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
