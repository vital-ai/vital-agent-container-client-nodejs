import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGResource
 */
export class KGResource extends KGNode {
  public kGResourceName?: string;
  public kGResourceType?: string;
  public kGResourceDescription?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGResource';
  }

  /**
   * Get property definitions for KGResource
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResourceName',
        tsPropertyName: 'kGResourceName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResourceType',
        tsPropertyName: 'kGResourceType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGResourceDescription',
        tsPropertyName: 'kGResourceDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
