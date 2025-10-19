import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTask
 */
export class KGTask extends KGNode {
  public kGTaskType?: string;
  public kGTaskStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTask';
  }

  /**
   * Get property definitions for KGTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaskType',
        tsPropertyName: 'kGTaskType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaskStatusURI',
        tsPropertyName: 'kGTaskStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
