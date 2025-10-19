import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessRightContext
 */
export class HaleyAccessRightContext extends VITAL_Node {
  public accessRightChannelContextURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessRightContext';
  }

  /**
   * Get property definitions for HaleyAccessRightContext
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessRightChannelContextURI',
        tsPropertyName: 'accessRightChannelContextURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
