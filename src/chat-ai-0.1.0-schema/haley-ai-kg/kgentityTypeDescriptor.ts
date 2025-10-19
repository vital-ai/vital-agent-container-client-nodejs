import { KGDescriptor } from './kgdescriptor';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntityTypeDescriptor
 */
export class KGEntityTypeDescriptor extends KGDescriptor {
  public kGEntityType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGEntityTypeDescriptor';
  }

  /**
   * Get property definitions for KGEntityTypeDescriptor
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
      }
    ];
  }


}
