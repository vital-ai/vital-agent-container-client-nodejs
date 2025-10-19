import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudCertificate
 */
export class CloudCertificate extends HaleyCloud {
  public cloudCertificateStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudCertificate';
  }

  /**
   * Get property definitions for CloudCertificate
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCloudCertificateStatusURI',
        tsPropertyName: 'cloudCertificateStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
