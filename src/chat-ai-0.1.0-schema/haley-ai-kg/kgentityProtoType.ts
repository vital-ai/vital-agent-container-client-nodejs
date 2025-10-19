import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntityProtoType
 */
export class KGEntityProtoType extends KGNode {
  public kGEntityType?: string;
  public kGEntityTypeExternIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGEntityProtoType';
  }

  /**
   * Get property definitions for KGEntityProtoType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityType',
        tsPropertyName: 'kGEntityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityTypeExternIdentifier',
        tsPropertyName: 'kGEntityTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
