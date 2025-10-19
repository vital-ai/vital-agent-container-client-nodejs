import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudBucket
 */
export class CloudBucket extends HaleyCloud {
  public bucketPath?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudBucket';
  }

  /**
   * Get property definitions for CloudBucket
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBucketPath',
        tsPropertyName: 'bucketPath',
        type: 'string',
        required: false
      }
    ];
  }


}
