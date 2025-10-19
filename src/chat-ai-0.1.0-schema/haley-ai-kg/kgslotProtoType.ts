import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSlotProtoType
 */
export class KGSlotProtoType extends KGNode {
  public kGSlotType?: string;
  public kGSlotTypeExternIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSlotProtoType';
  }

  /**
   * Get property definitions for KGSlotProtoType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotType',
        tsPropertyName: 'kGSlotType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotTypeExternIdentifier',
        tsPropertyName: 'kGSlotTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
