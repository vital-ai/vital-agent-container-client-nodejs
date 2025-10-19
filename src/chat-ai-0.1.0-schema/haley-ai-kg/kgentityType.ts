import { KGType } from './kgtype';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntityType
 */
export class KGEntityType extends KGType {
  public kGEntityTypeExternIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGEntityType';
  }

  /**
   * Get property definitions for KGEntityType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityTypeExternIdentifier',
        tsPropertyName: 'kGEntityTypeExternIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
